import { PinsSettings } from '@digipair/engine';
import * as ivm from 'isolated-vm';

class JavaScriptService {
  async execute(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { code, context: userContext = {}, timeout = 5000, memoryLimit = 128 } = params;

    if (!code) {
      throw new Error('JavaScript code is required');
    }

    let isolate: ivm.Isolate | null = null;

    try {
      // Create an isolated VM instance with memory limit
      isolate = new ivm.Isolate({ memoryLimit });

      // Create a new context within the isolate
      const isolateContext = await isolate.createContext();

      // Create a jail for the context to make global objects available
      const jail = isolateContext.global;

      // Add console.log functionality
      await jail.set('console', {
        log: (...args: any[]) => {
          console.log('[JavaScript Execution]:', ...args);
        },
        error: (...args: any[]) => {
          console.error('[JavaScript Execution Error]:', ...args);
        },
        warn: (...args: any[]) => {
          console.warn('[JavaScript Execution Warning]:', ...args);
        },
        info: (...args: any[]) => {
          console.info('[JavaScript Execution Info]:', ...args);
        },
      });

      // Set context variables in the isolated environment
      await jail.set('context', userContext);

      // Add JSON support
      await jail.set('JSON', {
        stringify: (obj: any) => JSON.stringify(obj),
        parse: (str: string) => JSON.parse(str),
      });

      // Add basic utilities
      await jail.set('setTimeout', (callback: () => void, delay: number) => {
        return setTimeout(callback, delay);
      });

      // Compile and run the JavaScript code
      const script = await isolate.compileScript(code);
      const result = await script.run(isolateContext, { timeout });

      // If result is a reference, copy it back to the main context
      if (result && typeof result.copy === 'function') {
        return await result.copy();
      }

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`JavaScript execution failed: ${error.message}`);
      }
      throw new Error(`JavaScript execution failed: ${String(error)}`);
    } finally {
      // Clean up the isolate
      if (isolate) {
        isolate.dispose();
      }
    }
  }
}

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new JavaScriptService().execute(params, pinsSettingsList, context);
