/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ollama } from '@langchain/community/llms/ollama';
import { RunnableSequence } from '@langchain/core/runnables';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { PromptTemplate } from '@langchain/core/prompts';
import { loadSummarizationChain } from 'langchain/chains';

type PinsSettings = any;

const OLLAMA_SERVER = process.env['OLLAMA_SERVER'] ?? 'http://localhost:11434';

class OllamaService {
  private extractJsonFromOutput(message: any): any {
    const text = message.content;
  
    // Define the regular expression pattern to match JSON blocks
    const pattern = /```json\s*((.|\n)*?)\s*```/gs;
  
    // Find all non-overlapping matches of the pattern in the string
    const matches = pattern.exec(text);
  
    if (matches && matches[1]) {
      try {
        return JSON.parse(matches[1].trim());
      } catch (error) {
        throw new Error(`Failed to parse: ${matches[1]}`);
      }
    } else {
      throw new Error(`No JSON found in: ${message}`);
    }
  }

  async basic(
    params: any,
    _pins: PinsSettings[],
    context: any
  ) {
    const { modelName = 'mistral', temperature = 0, baseUrl = context.private?.OLLAMA_SERVER ?? OLLAMA_SERVER, prompt, schema } = params;
    const model = new Ollama({ model: modelName, temperature, baseUrl });
    let chain: RunnableSequence<any, any>;

    if (!schema) {
      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          prompt ?? '{prompt}',
        ),
        model as any,
      ]);
    } else {
      const promptFormatted = prompt.replace(/{/g, '{{').replace(/}/g, '}}');
      const SYSTEM_PROMPT_TEMPLATE = [
        "Answer the user's query. You must return your answer as JSON that matches the given schema:",
        "```json\n{schema}\n```.",
        "Make sure to wrap the answer in ```json and ``` tags. Conform to the given schema exactly.",
      ].join("\n");

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          `Answer the users question as best as possible.\n{format_instructions}\n${promptFormatted ?? '{prompt}'}`,
          {
            partialVariables: {
              schema,
              format_instructions: SYSTEM_PROMPT_TEMPLATE,
            }
          }
        ),
        model as any,
        this.extractJsonFromOutput,
      ]);
    }

    return chain;
  }

  async vision(
    params: any,
    _pins: PinsSettings[],
    context: any
  ) {
    const { modelName = 'llava', temperature = 0, baseUrl = context.private?.OLLAMA_SERVER ?? OLLAMA_SERVER, prompt, images, schema } = params;
    const model = new Ollama({ model: modelName, temperature, baseUrl }).bind({
      images,
    });
    let chain: RunnableSequence<any, any>;

    if (!schema) {
      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          prompt ?? '{prompt}',
        ),
        model as any,
      ]);
    } else {
      const promptFormatted = prompt.replace(/{/g, '{{').replace(/}/g, '}}');
      const SYSTEM_PROMPT_TEMPLATE = [
        "Answer the user's query. You must return your answer as JSON that matches the given schema:",
        "```json\n{schema}\n```.",
        "Make sure to wrap the answer in ```json and ``` tags. Conform to the given schema exactly.",
      ].join("\n");

      chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
          `Answer the users question as best as possible.\n{format_instructions}\n${promptFormatted ?? '{prompt}'}`,
          {
            partialVariables: {
              schema,
              format_instructions: SYSTEM_PROMPT_TEMPLATE,
            }
          }
        ),
        model as any,
        this.extractJsonFromOutput,
      ]);
    }

    return chain;
  }

  async summarization(
    params: any,
    _pins: PinsSettings[],
    context: any
  ) {
    const {
      modelName = 'mistral',
      temperature = 0,
      baseUrl = context.private?.OLLAMA_SERVER ?? OLLAMA_SERVER,
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

      prompt: !prompt ? undefined : PromptTemplate.fromTemplate(prompt) as any,

      combineMapPrompt: !combineMapPrompt ? undefined : PromptTemplate.fromTemplate(combineMapPrompt) as any,
      combinePrompt: !combinePrompt ? undefined : PromptTemplate.fromTemplate(combinePrompt) as any,
      returnIntermediateSteps,

      refinePrompt: !refinePrompt ? undefined : PromptTemplate.fromTemplate(refinePrompt) as any,
      questionPrompt: !questionPrompt ? undefined : PromptTemplate.fromTemplate(questionPrompt) as any,
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

export const basic = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new OllamaService().basic(params, pinsSettingsList, context);

export const vision = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new OllamaService().vision(params, pinsSettingsList, context);

export const summarization = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new OllamaService().summarization(params, pinsSettingsList, context);
