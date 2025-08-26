# skill-javascript

This skill provides JavaScript execution capabilities using isolated-vm for secure code execution with context support.

## Features

- Execute JavaScript code in an isolated V8 environment
- Support for context variables and data passing
- Secure execution environment with resource limits
- Integration with the Digipair PINS system

## Functions

### execute

Executes JavaScript code in an isolated virtual machine with access to provided context.

**Parameters:**
- `code`: The JavaScript code to execute
- `context`: Optional context data to pass to the JavaScript execution environment
- `timeout`: Execution timeout in milliseconds (default: 5000ms)
- `memoryLimit`: Memory limit for the isolate in MB (default: 128MB)

**Returns:** The result of the JavaScript execution