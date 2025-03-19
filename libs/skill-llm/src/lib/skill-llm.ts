/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import { HumanMessage } from '@langchain/core/messages';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { loadSummarizationChain } from 'langchain/chains';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { z } from 'zod';

class LLMService {
  private objectToInput(obj: Record<string, any>): Record<string, () => any> {
    const result: Record<string, () => any> = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = () => obj[key];
      }
    }

    return result;
  }

  private jsonSchemaToZod(schema: any): any {
    const zodProps: Record<string, any> = {};

    switch (schema.type) {
      case 'string':
        return z.string().optional();
      case 'number':
        return z.number().optional();
      case 'boolean':
        return z.boolean().optional();
      case 'object':
        for (const prop in schema.properties) {
          zodProps[prop] = this.jsonSchemaToZod(schema.properties[prop]);

          if (schema.properties[prop].description) {
            zodProps[prop] = zodProps[prop].describe(schema.properties[prop].description);
          }
        }
        return z
          .object(zodProps)
          .required(
            (schema.required ?? []).reduce(
              (acc: any, reqProp: any) => ({ ...acc, [reqProp]: true }),
              {},
            ),
          )
          .optional();
      case 'array':
        if (schema.items) {
          return z.array(this.jsonSchemaToZod(schema.items)).optional();
        }
        return z.array(z.unknown()).optional();
      default:
        throw new Error(`Unsupported JSON Schema type: ${schema.type}`);
    }
  }

  async invoke(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { execute, input = {} }: { execute: PinsSettings[]; input: any } = params;
    const chain = RunnableSequence.from([
      this.objectToInput(input),
      ...(await Promise.all(
        execute.map((pinsSettings: PinsSettings, i: number) =>
          executePinsList([pinsSettings], context, `${context.__PATH__}.execute[${i}]`),
        ),
      )),
    ] as any);

    let model: string;
    let service: string;
    const result = await chain.invoke(
      {},
      {
        callbacks: [
          {
            handleChatModelStart: async (
              { id }: any,
              _1: any,
              _2: any,
              _3: any,
              extrasParams: any,
            ) => {
              model = (extrasParams?.['invocation_params'] as any).model;
              service = id[2];
            },
            handleLLMStart: async ({ id }: any, _1: any, _2: any, _3: any, extrasParams: any) => {
              model = (extrasParams?.['invocation_params'] as any).model;
              service = id[2];
            },
            handleLLMEnd: async (infos: any) => {
              const { completionTokens, promptTokens } = infos.llmOutput?.['tokenUsage'] || {
                completionTokens: 0,
                promptTokens: 0,
              };
              const skillLogger = require('@digipair/skill-logger');
              await skillLogger.addConsumption(
                context,
                service,
                model,
                promptTokens,
                completionTokens,
              );
            },
          },
        ],
      },
    );

    return result;
  }

  async reasoningStep(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { attributes } = params;
    const data: { [key: string]: any } = {};
    let i = 0;

    for (const attribute of attributes) {
      data[attribute.name] = async (previous: any) =>
        await executePinsList(
          attribute.value,
          {
            ...context,
            previous,
            parent: { previous: context.previous, parent: context.parent },
          },
          `${context.__PATH__}.attributes[${i}]`,
        );
      i++;
    }

    return data;
  }

  async basic(params: any, _pins: PinsSettings[], context: any) {
    const { model, prompt, schema } = params;
    let chain: RunnableSequence<any, any>;

    if (!schema) {
      const modelInstance = await executePinsList(
        model ?? context.privates.MODEL_LLM,
        context,
        `${context.__PATH__}.model`,
      );

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(prompt ?? '{prompt}'),
        modelInstance,
      ]);
    } else {
      const modelInstance = await executePinsList(
        model ?? context.privates.MODEL_LLM_JSON ?? context.privates.MODEL_LLM,
        context,
        `${context.__PATH__}.model`,
      );
      const parser = new StructuredOutputParser(this.jsonSchemaToZod(schema) as any);

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          `${prompt ?? '{prompt}'}
          
          Answer the users question as best as possible.
          {format_instructions}
          
          JSON:`,
          {
            partialVariables: {
              format_instructions: parser.getFormatInstructions(),
            },
          },
        ),
        modelInstance,
        parser,
      ]);
    }

    return chain;
  }

  async vision(params: any, _pins: PinsSettings[], context: any) {
    const { model, prompt, schema, image } = params;
    let chain: RunnableSequence<any, any>;

    if (!schema) {
      const modelInstance = await executePinsList(
        model ?? context.privates.MODEL_VISION ?? context.privates.MODEL_LLM,
        context,
        `${context.__PATH__}.model`,
      );

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(prompt ?? '{prompt}'),
        (text: any) => [
          new HumanMessage({
            content: [
              {
                type: 'text',
                text: text.value,
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          }),
        ],
        modelInstance,
      ]);
    } else {
      const modelInstance = await executePinsList(
        model ??
          context.privates.MODEL_VISION_JSON ??
          context.privates.MODEL_VISION ??
          context.privates.MODEL_LLM_JSON ??
          context.privates.MODEL_LLM,
        context,
        `${context.__PATH__}.model`,
      );
      const parser = new StructuredOutputParser(this.jsonSchemaToZod(schema) as any);

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          `${prompt ?? '{prompt}'}
            
            Answer the users question as best as possible.
            {format_instructions}
            
            JSON:`,
          {
            partialVariables: {
              format_instructions: parser.getFormatInstructions(),
            },
          },
        ),
        (text: any) => [
          new HumanMessage({
            content: [
              {
                type: 'text',
                text: text.value,
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          }),
        ],
        modelInstance,
        parser,
      ]);
    }

    return chain;
  }

  async summarization(params: any, _pins: PinsSettings[], context: any) {
    const {
      model = context.privates.MODEL_LLM,
      chunkSize = 1024,

      type = 'map_reduce',
      verbose = false,

      prompt,

      combineMapPrompt,
      combinePrompt,
      returnIntermediateSteps,

      refinePrompt,
      questionPrompt,
    } = params;

    const modelInstance = await executePinsList(model, context, `${context.__PATH__}.model`);
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize });

    const summarizationChain = loadSummarizationChain(modelInstance, {
      type,
      verbose,

      prompt: !prompt ? undefined : (PromptTemplate.fromTemplate(prompt) as any),

      combineMapPrompt: !combineMapPrompt
        ? undefined
        : (PromptTemplate.fromTemplate(combineMapPrompt) as any),
      combinePrompt: !combinePrompt
        ? undefined
        : (PromptTemplate.fromTemplate(combinePrompt) as any),
      returnIntermediateSteps,

      refinePrompt: !refinePrompt ? undefined : (PromptTemplate.fromTemplate(refinePrompt) as any),
      questionPrompt: !questionPrompt
        ? undefined
        : (PromptTemplate.fromTemplate(questionPrompt) as any),
    });

    const chain = RunnableSequence.from([
      {
        input_documents: async ({ document }: any) =>
          await textSplitter.createDocuments([document]),
      },
      summarizationChain as any,
    ]);

    return chain;
  }
}

export const invoke = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().invoke(params, pinsSettingsList, context);

export const reasoningStep = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().reasoningStep(params, pinsSettingsList, context);

export const basic = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().basic(params, pinsSettingsList, context);

export const vision = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().vision(params, pinsSettingsList, context);

export const summarization = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().summarization(params, pinsSettingsList, context);
