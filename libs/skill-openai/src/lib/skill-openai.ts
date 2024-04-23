/* eslint-disable @typescript-eslint/no-unused-vars */
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { loadSummarizationChain } from 'langchain/chains';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { z } from 'zod';

type PinsSettings = any;

const OPENAI_SERVER = process.env['OPENAI_SERVER'];
const OPENAI_API_KEY = process.env['OPENAI_API_KEY'];

function jsonSchemaToZod(schema: any): any {
  const zodProps: Record<string, any> = {};

  switch (schema.type) {
    case 'string':
      return z.string();
    case 'number':
      return z.number();
    case 'boolean':
      return z.boolean();
    case 'object':
      for (const prop in schema.properties) {
        zodProps[prop] = jsonSchemaToZod(schema.properties[prop]);

        if (schema.properties[prop].description) {
          zodProps[prop] = zodProps[prop].describe(schema.properties[prop].description);
        }
      }
      return z
        .object(zodProps)
        .required(
          (schema.required ?? []).reduce((acc: any, reqProp: any) => ({ ...acc, [reqProp]: true }), {}),
        );
    case 'array':
      if (schema.items) {
        return z.array(jsonSchemaToZod(schema.items));
      }
      return z.array(z.unknown());
    default:
      throw new Error(`Unsupported JSON Schema type: ${schema.type}`);
  }
}

class OpenAIService {
  async basic(params: any, _pins: PinsSettings[], _context: any) {
    const {
      modelName = 'gpt-3.5-turbo',
      temperature = 0,
      baseURL = OPENAI_SERVER,
      apiKey = OPENAI_API_KEY,
      prompt,
      schema,
    } = params;
    const model = new OpenAI({ modelName, temperature, configuration: { baseURL, apiKey } });
    let chain: RunnableSequence<any, any>;

    if (!schema) {
      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(prompt ?? '{prompt}'),
        model as any,
      ]);
    } else {
      const parser = new StructuredOutputParser(jsonSchemaToZod(schema) as any);

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          `${prompt ?? '{prompt}'}
          
          Answer the users question as best as possible.\n{format_instructions}
          
          JSON:`,
          {
            partialVariables: {
              format_instructions: parser.getFormatInstructions(),
            },
          },
        ),
        model,
        parser,
      ]);
    }

    return chain;
  }

  async summarization(params: any, _pins: PinsSettings[], _context: any) {
    const {
      modelName = 'gpt-3.5-turbo',
      temperature = 0,
      baseURL = OPENAI_SERVER,
      apiKey = OPENAI_API_KEY,
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

    const model = new OpenAI({ modelName, temperature, configuration: { baseURL, apiKey } });
    const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize });

    const summarizationChain = loadSummarizationChain(model as any, {
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
        input_documents: async ({ document }) => await textSplitter.createDocuments([document]),
      },
      summarizationChain as any,
    ]);

    return chain;
  }
}

export const basic = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().basic(params, pinsSettingsList, context);

export const summarization = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().summarization(params, pinsSettingsList, context);
