/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ollama } from '@langchain/community/llms/ollama';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { loadSummarizationChain } from 'langchain/chains';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { z } from 'zod';

type PinsSettings = any;

const OLLAMA_SERVER = process.env['OLLAMA_SERVER'] ?? 'http://localhost:11434';

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

class OllamaService {
  async basic(params: any, _pins: PinsSettings[], _context: any) {
    const {
      modelName = 'mistral',
      temperature = 0,
      baseUrl = OLLAMA_SERVER,
      prompt,
      schema,
    } = params;
    const model = new Ollama({ model: modelName, temperature, baseUrl });
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
          `Answer the users question as best as possible.\n{format_instructions}\n${prompt ?? '{prompt}'}\n\nJSON:`,
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

  async vision(params: any, _pins: PinsSettings[], _context: any) {
    const {
      modelName = 'llava',
      temperature = 0,
      baseUrl = OLLAMA_SERVER,
      schema,
      prompt,
      image,
    } = params;
    const model = new Ollama({ model: modelName, temperature, baseUrl }).bind({
      images: [image.split(';base64,')[1]],
      prompt,
    } as any);
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
          `Answer the users question as best as possible.\n{format_instructions}\n${prompt ?? '{prompt}'}\n\nJSON:`,
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
      modelName = 'mistral',
      temperature = 0,
      baseUrl = OLLAMA_SERVER,
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

    const model = new Ollama({ model: modelName, temperature, baseUrl });
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
  new OllamaService().basic(params, pinsSettingsList, context);

export const vision = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OllamaService().vision(params, pinsSettingsList, context);

export const summarization = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OllamaService().summarization(params, pinsSettingsList, context);
