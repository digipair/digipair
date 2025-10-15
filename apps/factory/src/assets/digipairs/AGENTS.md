# Repository Guidelines

## Project Structure & Module Organization

- Source: JSON-based agent, tool, and workflow definitions at the repo root.
- Agents: `tardi-*`, `studio`, `common`, `worker-skill-builder` (each contains `config.json`, `schema.json`, `*.json` actions/boosts/workflows, and `avatar.png`).
- Tools: `tool-*` directories (HTTP, JSON, PDF, OAuth2, Sharp, etc.).
- Core config: `default.json` (global settings), `planning.jsonl` (cron-like scheduled tasks).

## Build, Test, and Development Commands

- Build: none. The Digipair/Tessi runtime consumes these JSON files directly.
- Validate JSON: `jq . tool-http/config.json` (repeat for edited files).
- Find required fields: `rg -n "metadata.output"` to confirm actions declare output schema.
- OpenAPI lint (optional): `npx @redocly/cli lint tool-http/schema.json`.
- Runtime check: load/reload the repository in the Digipair runtime; watch logs for schema or dependency errors.

## Coding Style & Naming Conventions

- Format: valid JSON, 2-space indentation, no trailing commas.
- Naming: directories kebab-case; files kebab-case with intent, e.g., `action-*.json`, `workflow-*.json`.
- Schemas: `schema.json` must be OpenAPI 3.0 compliant; do not edit schemas to register new reasonings (they are auto-discovered).
- Libraries: prefer `latest` for `@digipair/skill-*` entries unless a pin is required.

## Testing Guidelines

- Syntax: validate all edited JSON with `jq`.
- Contract: ensure every action declares `metadata.output` with the expected result schema.
- OpenAPI: validate `schema.json` with an OpenAPI linter.
- Smoke test: run affected boosts/actions in the runtime UI; verify variables, conditions, and file flows (e.g., S3 `reference`) behave as expected.

## Commit & Pull Request Guidelines

- Commits: use concise Conventional-style prefixes seen in history (e.g., `feat: ...`, `fix: ...`). Keep summaries imperative and under ~72 chars.
- PRs: include purpose, scope, sample paths touched (e.g., `tool-pdf/*`), and screenshots only if UI-facing. Link issues/tickets. Checklist: JSON valid, schemas linted, `metadata.output` present, no secrets committed.

## Security & Configuration Tips

- Do not commit secrets or real endpoints; use placeholders and environment-based configuration where applicable.

## Project Architecture

This is a **Digipair Agent Factory** containing example configurations for a Tardigrade/Tessi system. The project provides templates and examples for creating AI agents, tools, and automated workflows using the Digipair framework.

### Agent Types

- **common**: Shared agent with common actions and utilities
- **studio**: Development studio agent for managing digipairs, tools, and workers

### Tool Categories

- **tool-\* directories**: Various service integrations (HTTP, JSON, PDF, OAuth2, etc.)
- **worker-\* directories**: Digital agent expert in a specific trade/domain

### Core Configuration Structure

- `default.json`: Global default configuration with model endpoints and system paths
- `planning.jsonl`: JSONL file containing scheduled tasks by cron

### Configuration File Structure

Each agent/tool directory contains:

- `config.json`: Main configuration with metadata, skill dependencies, and variables
- `schema.json`: OpenAPI 3.0 schema defining available API endpoints
- `*.json`: Individual reasoning files (actions, boosts, workflows)
- `avatar.png`: Visual representation of the agent

### Skill System Architecture

The Digipair framework uses a modular skill system:

- `@digipair/skill-*`: Main framework skills (basic, chatbot, editor, http, etc.)
- Libraries defined in `config.json` under the `libraries` and `webLibraries` sections
- All versions generally set to "latest"

### Model Configuration

The `default.json` file configures AI model endpoints:

- `MODEL_DSP` / `MODEL_LLM`: Main language models (using vLLM with Gemma 3)
- `MODEL_DSP_VISION` / `MODEL_VISION`: Vision-capable models
- `MODEL_EMBEDDINGS`: Embedding models (using Alibaba GTE-Qwen2)

### Reasoning and Workflow System

**Reasoning Files**: JSON-based workflow definitions that can be:

- **Actions**: Simple API endpoints or operations
- **Workflows**: Multi-step automated processes

### Working with Agent Configurations

#### Configuration Guidelines

1. **JSON Syntax**: All files must be valid JSON—syntax errors break the entire system
2. **Schema Compliance**: `schema.json` files must follow the OpenAPI 3.0 specification
3. **Library Versions**: Use "latest" for all `@digipair/skill-*` dependencies
4. **Metadata**: Controls UI appearance (colors, avatars, descriptions)

#### Key Configuration Templates

**Agent Metadata**:

```json
"metadata": {
  "color": "#3b82f6",
  "primary": "#51E0DC",
  "textPrimary": "#242E3B"
}
```

**Skill Dependencies**:

```json
"libraries": {
  "@digipair/skill-basic": "latest",
  "@digipair/skill-chatbot": "latest"
},
"webLibraries": {
  "blockly": "latest",
  "toastify-js": "latest"
}
```

### Scheduled Automation

**planning.jsonl Structure**:

- Each line is a separate JSON object with cron scheduling
- Current scheduled tasks:
  - Daily consumption calculation (3 AM)
  - Log cleanup (3:30 AM)
- Reference to specific digipair and reasoning combinations

### Development Environment

- **No Build System**: JSON configurations are loaded directly by the Digipair runtime
- **Hot Reloading**: Changes take effect when the system reloads configurations
- **No Package Management**: Dependencies managed via the skill system
- **Runtime Validation**: Invalid JSON or missing dependencies cause runtime errors

### File Type Reference

- `config.json`: Agent/tool configuration and dependencies
- `schema.json`: OpenAPI 3.0 API definitions
- `*.json`: Reasoning files (actions, boosts, workflows)
- `planning.jsonl`: Scheduled tasks by cron (JSONL format)
- `avatar.png`: 256x256 agent avatars
- `default.json`: Global system configuration

### Action JSON

- An action must always have a JSON schema for the output format in the `metadata.output` parameter
- Do not update the `schema.json` file when adding JSON reasoning files, as they are added automatically
- Do not handle error cases (try/catch) in actions—leave error handling to the factory
- Expressions used after the "FEEL:" keyword are in DMN FEEL format
- String values in properties are interpreted by Handlebars by default, unless they start with "FEEL:"

### List of Usable DMN FEEL Functions

In addition to standard DMN FEEL language functions, the following functions can be used within an action:

```typescript
  getTime: (time: string) => new Date(time).getTime(),
  fromTime: (time: number) => new Date(time).toISOString(),
  atob: (value: string) => atob(value),
  btoa: (value: string) => btoa(value),
  encodeURIComponent: (value: string | number | boolean) => encodeURIComponent(value),
  decodeURIComponent: (value: string) => decodeURIComponent(value),
  encodeUTF8: (value: string) =>
    Array.from(new TextEncoder().encode(value))
      .map(b => String.fromCharCode(b))
      .join(''),
  decodeUTF8: (value: string) =>
    new TextDecoder().decode(new Uint8Array(Array.from(value).map(c => c.charCodeAt(0)))),
  JSONparse: (value: string) => JSON.parse(value),
  JSONstringify: (value: string) => JSON.stringify(value),
```

### List of Usable Handlebars Functions

In addition to standard Handlebars template language functions, the following functions can be used within an action:

```typescript
Handlebars.registerHelper('JSONstringify', function (value: any) {
  return JSON.stringify(value);
});
```
