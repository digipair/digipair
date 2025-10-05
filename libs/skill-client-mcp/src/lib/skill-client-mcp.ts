/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

class MCPClientService {
  async connect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<Client> {
    const { url, name = 'digipair-mcp-client', version = '1.0.0', options = {} } = params;

    const transport = new StreamableHTTPClientTransport(new URL(url), options);
    const client = new Client({
      name,
      version,
    });

    await client.connect(transport);
    return client;
  }

  async disconnect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<void> {
    const { client } = params;

    if (client) {
      await client.close();
    }
  }

  async listResources(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    const result = await client.listResources();
    return result;
  }

  async readResource(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client, uri } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    if (!uri) {
      throw new Error('[SKILL-MCP] Resource URI not provided');
    }

    const result = await client.readResource({ uri });
    return result;
  }

  async listTools(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    const result = await client.listTools();
    return result;
  }

  async callTool(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client, name, arguments: args = {} } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    if (!name) {
      throw new Error('[SKILL-MCP] Tool name not provided');
    }

    const result = await client.callTool({ name, arguments: args });
    return result;
  }

  async listPrompts(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    const result = await client.listPrompts();
    return result;
  }

  async getPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client, name, arguments: args = {} } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    if (!name) {
      throw new Error('[SKILL-MCP] Prompt name not provided');
    }

    const result = await client.getPrompt({ name, arguments: args });
    return result;
  }

  async getServerCapabilities(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    return client.serverCapabilities;
  }

  async getServerInfo(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client } = params;

    if (!client) {
      throw new Error('[SKILL-MCP] Client not provided');
    }

    return client.serverInfo;
  }
}

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().connect(params, pinsSettingsList, context);

export const disconnect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().disconnect(params, pinsSettingsList, context);

export const listResources = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().listResources(params, pinsSettingsList, context);

export const readResource = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().readResource(params, pinsSettingsList, context);

export const listTools = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().listTools(params, pinsSettingsList, context);

export const callTool = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().callTool(params, pinsSettingsList, context);

export const listPrompts = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().listPrompts(params, pinsSettingsList, context);

export const getPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().getPrompt(params, pinsSettingsList, context);

export const getServerCapabilities = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new MCPClientService().getServerCapabilities(params, pinsSettingsList, context);

export const getServerInfo = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().getServerInfo(params, pinsSettingsList, context);
