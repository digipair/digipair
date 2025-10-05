/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

class MCPServerService {
  async createServer(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<void> {
    const { name = 'digipair-mcp-server', version = '1.0.0', tools = [] } = params;

    const server = new McpServer({
      name,
      version,
    });

    // Register tools
    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];

      server.registerTool(
        tool.name,
        {
          title: tool.title,
          description: tool.description,
          inputSchema: tool.inputSchema,
          outputSchema: tool.outputSchema,
        },
        async (params: any) => {
          return await executePinsList(
            { ...tool.execute, params },
            context,
            `${context.__PATH__}.tools[${i}].execute`,
          );
        },
      );
    }

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });

    // Start the server
    await server.connect(transport);
    await transport.handleRequest(
      context.privates.req,
      context.privates.res,
      context.privates.req.body,
    );
  }
}

const mcpServerService = new MCPServerService();

export const createServer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  mcpServerService.createServer(params, pinsSettingsList, context);
