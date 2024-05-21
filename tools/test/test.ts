import { AgentExecutor, createReactAgent } from 'langchain/agents';
import { pull } from 'langchain/hub';
import { Ollama } from '@langchain/community/llms/ollama';
import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredTool, Tool, DynamicTool } from '@langchain/core/tools';
import { z } from 'zod';

// Get the prompt to use - you can modify this!
// If you want to see the prompt in full, you can at:
// https://smith.langchain.com/hub/hwchase17/react-chat
// const prompt = await pull<PromptTemplate>('hwchase17/react-chat');

const prompt = PromptTemplate.fromTemplate(`Assistant est conçu pour être en mesure d'aider dans une large gamme de tâches, de la réponse à des questions simples à la fourniture d'explications et de discussions approfondies sur une grande variété de sujets. En tant que modèle de langage, Assistant est capable de générer un texte semblable à celui d'un humain en fonction de l'entrée qu'il reçoit, ce qui lui permet de s'engager dans des conversations qui sonnent naturellement et de fournir des réponses cohérentes et pertinentes par rapport au sujet traité.

Assistant est constamment en train d'apprendre et de s'améliorer, et ses capacités évoluent constamment. Il est capable de traiter et de comprendre de grandes quantités de texte, et peut utiliser ces connaissances pour fournir des réponses précises et informatives à une large gamme de questions. De plus, Assistant est capable de générer son propre texte en fonction de l'entrée qu'il reçoit, ce qui lui permet de s'engager dans des discussions et de fournir des explications et des descriptions sur une grande variété de sujets.

Dans l'ensemble, Assistant est un outil puissant qui peut aider dans une large gamme de tâches et fournir des informations et des idées précieuses sur une grande variété de sujets. Que vous ayez besoin d'aide pour une question spécifique ou que vous souhaitiez simplement avoir une conversation sur un sujet particulier, Assistant est là pour vous aider.

Outils :
--------

Assistant a accès aux outils suivants :
{tools}

Pour utiliser un outil, veuillez utiliser le format suivant :

\`\`\`
Thought: Ai-je besoin d'utiliser un outil ? Oui
Action: l'action à entreprendre, doit être l'une des [{tool_names}]
Action Input: l'entrée de l'action
Observation: le résultat de l'action
\`\`\`

Lorsque vous avez une réponse à dire à l'humain, ou si vous n'avez pas besoin d'utiliser un outil, vous DEVEZ utiliser le format :

\`\`\`
Thought: Ai-je besoin d'utiliser un outil ? Non
Finale Answer: [votre réponse ici]
\`\`\`

Commencez !

Historique de conversation précédent :
{chat_history}

Nouvelle entrée : {input}
{agent_scratchpad}
`)
import { WikipediaQueryRun } from '@langchain/community/tools/wikipedia_query_run';

class DigipairTool extends Tool {
  name = 'digipair';
  description = 'return the magic number of a digipair';

  async _call(number): Promise<string> {
    console.log('number:', number);
    return `${+number * 325}`;
  }
}

class CalculatorTool extends Tool {
  name = 'calculator';
  description = 'make an operation with: number operator number';

  async _call(operation): Promise<string> {
    console.log('operation:', operation, eval(operation));
    return `${eval(operation)}`;
  }
}

const tools = [
  new DynamicTool({
    name: 'history',
    description: "recherche dans l'historique de conversation",
    func: async query => {
      console.log('query history', query);
      return `User: La date d'anniversaire de ma mère est le 12/12/1922`;
    },
  }),
  new DynamicTool({
    name: 'knowledge',
    description: "recherche une information dans la base de connaissance de l'entreprise",
    func: async query => {
      console.log('query knowledge', query);
      return `résultats de la recherche: pas de correspondance trouvée`;
    },
  }),
  new DynamicTool({
    name: 'boosts-propose',
    description: "propose des actions à l'utilisateur",
    func: async query => {
      console.log('query boosts', query);
      return `Liste des boosts proposés: générer une procédure, générer un formulaire, envoyer un mail`;
    },
  }),
]; //, new CalculatorTool()];

const llm = new ChatOllama({
  model: 'mistral',
  baseUrl: 'http://localhost:11434',
  temperature: 0,
  verbose: false,
});

const agent = await createReactAgent({
  llm,
  tools,
  prompt,
});

const agentExecutor = new AgentExecutor({
  agent,
  tools,
  verbose: false,
});

const result = await agentExecutor.invoke({
  input: "Je souhaite générer une procédure automatique pour l'envoi d'un mail",
  chat_history:
    'Human: Bonjour, comment vas-tu ?\nAI: Très bien merci, comment puis-je vous aider ?',
});

console.log(result);

/*
  {
    input: 'what is LangChain?',
    output: 'LangChain is a platform for building applications using LLMs (Language Model Microservices) through composability. It can be used for tasks such as retrieval augmented generation, analyzing structured data, and creating chatbots.'
  }
*/
