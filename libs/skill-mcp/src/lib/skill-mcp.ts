/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';

const REGEX_BASE64URL = /^data:[a-zA-Z0-9\/\+\-\.]+;base64,[A-Za-z0-9+/=]+$/;
class MCPServerService {
  private jsonSchemaToZod(schema: any, isRequired = false): any {
    const zodProps: Record<string, any> = {};

    switch (schema.type) {
      case 'string':
        if (schema.format === 'byte') {
          return isRequired ? z.string().regex(REGEX_BASE64URL) : z.string().regex(REGEX_BASE64URL).optional();
        }
        return isRequired ? z.string() : z.string().optional();
      case 'number':
        return isRequired ? z.number() : z.number().optional();
      case 'boolean':
        return isRequired ? z.boolean() : z.boolean().optional();
      case 'object':
        for (const prop in schema.properties) {
          zodProps[prop] = this.jsonSchemaToZod(schema.properties[prop]);

          if (schema.properties[prop].description) {
            zodProps[prop] = zodProps[prop].describe(schema.properties[prop].description);
          }
        }
        return isRequired
          ? z
              .object(zodProps)
              .required(
                (schema.required ?? []).reduce(
                  (acc: any, reqProp: any) => ({ ...acc, [reqProp]: true }),
                  {},
                ),
              )
          : z
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
          return isRequired
            ? z.array(this.jsonSchemaToZod(schema.items, true))
            : z.array(this.jsonSchemaToZod(schema.items, true)).optional();
        }
        return isRequired ? z.array(z.unknown()) : z.array(z.unknown()).optional();
      default:
        throw new Error(`Unsupported JSON Schema type: ${schema.type}`);
    }
  }

  async createServer(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<void> {
    const { name = 'digipair-mcp-server', version = '1.0.0', tools = [] } = params;

    const server = new McpServer({
      name,
      version,
    });

    // Register tools
    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];

      let inputSchema: any;
      if (tool.inputSchema) {
        inputSchema = {};
        for (const prop in tool.inputSchema.properties) {
          inputSchema[prop] = this.jsonSchemaToZod(
            tool.inputSchema.properties[prop],
            tool.inputSchema.required?.includes(prop),
          );
        }
      }

      let outputSchema: any;
      if (tool.outputSchema) {
        outputSchema = {};
        for (const prop in tool.outputSchema.properties) {
          outputSchema[prop] = this.jsonSchemaToZod(
            tool.outputSchema.properties[prop],
            tool.outputSchema.required?.includes(prop),
          );
        }
      }

      server.registerTool(
        tool.name,
        {
          title: tool.title,
          description: tool.description,
          annotations: tool.annotations,
          inputSchema: inputSchema,
          outputSchema: outputSchema,
        },
        async (params: any) => {
          return await executePinsList(
            tool.execute,
            { ...context, params },
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
      context.protected.req,
      context.protected.res,
      context.protected.req.body,
    );
  }
}

const mcpServerService = new MCPServerService();

export const createServer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  mcpServerService.createServer(params, pinsSettingsList, context);
