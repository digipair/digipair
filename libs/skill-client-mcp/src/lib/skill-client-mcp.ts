/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

class MCPClientService {
  async StreamableHTTPClient(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<Client> {
    const { url, name = 'digipair-mcp-client', version = '1.0.0', options = {} } = params;

    const transport = new StreamableHTTPClientTransport(new URL(url), options);
    const client = new Client({
      name,
      version,
    });

    await client.connect(transport);
    return client;
  }

  async StdioClient(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<Client> {
    const { name = 'digipair-mcp-stdio-client', version = '1.0.0', options = {} } = params;

    const transport = new StdioClientTransport(options);
    const client = new Client({
      name,
      version,
    });

    await client.connect(transport);
    return client;
  }

  async listResources(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.listResources();
    clientInstance.close();
    return result;
  }

  async readResource(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP, uri } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.readResource({ uri });
    clientInstance.close();
    return result;
  }

  async listTools(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.listTools();
    clientInstance.close();
    return result;
  }

  async callTool(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP, name, arguments: args = {} } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.callTool({ name, arguments: args });
    clientInstance.close();
    return result;
  }

  async listPrompts(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.listPrompts();
    clientInstance.close();
    return result;
  }

  async getPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP, name, arguments: args = {} } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = await clientInstance.getPrompt({ name, arguments: args });
    clientInstance.close();
    return result;
  }

  async getServerCapabilities(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.privates.CLIENT_MCP } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = clientInstance.serverCapabilities;
    clientInstance.close();
    return result;
  }

  async getServerInfo(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_MCP } = params;
    const clientInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    const result = clientInstance.serverInfo;
    clientInstance.close();
    return result;
  }
}

export const StreamableHTTPClient = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().StreamableHTTPClient(params, pinsSettingsList, context);

export const StdioClient = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MCPClientService().StdioClient(params, pinsSettingsList, context);

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
