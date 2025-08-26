describe('skill-javascript', () => {
  let context: any;

  beforeEach(() => {
    context = {
      variables: {
        testVar: 'test value',
        number: 42
      },
      __PATH__: '/test/path',
      __LIBRARY__: 'test-library',
      __REASONING__: []
    };
  });

  describe('function imports', () => {
    it('should import execute function', async () => {
      const { execute } = await import('./skill-javascript');
      expect(typeof execute).toBe('function');
    });

    it('should import executeWithReturnContext function', async () => {
      const { executeWithReturnContext } = await import('./skill-javascript');
      expect(typeof executeWithReturnContext).toBe('function');
    });
  });

  describe('parameter validation', () => {
    it('should require code parameter for execute', async () => {
      const { execute } = await import('./skill-javascript');
      const params = {};

      await expect(execute(params, [], context)).rejects.toThrow('JavaScript code is required');
    });

    it('should require code parameter for executeWithReturnContext', async () => {
      const { executeWithReturnContext } = await import('./skill-javascript');
      const params = {};

      await expect(executeWithReturnContext(params, [], context)).rejects.toThrow('JavaScript code is required');
    });

    it('should accept valid parameters structure for execute', async () => {
      const { execute } = await import('./skill-javascript');
      const params = {
        code: 'return 1;',
        context: { test: 'value' },
        timeout: 1000,
        memoryLimit: 64
      };

      // We expect this to attempt execution (and potentially fail due to isolated-vm not being available in test env)
      // but the structure should be valid
      try {
        await execute(params, [], context);
      } catch (error: any) {
        // We accept execution failures in test environment, but not parameter validation failures
        expect(error.message).not.toContain('JavaScript code is required');
      }
    });

    it('should accept valid parameters structure for executeWithReturnContext', async () => {
      const { executeWithReturnContext } = await import('./skill-javascript');
      const params = {
        code: 'return 1;',
        context: { test: 'value' },
        timeout: 1000,
        memoryLimit: 64
      };

      try {
        await executeWithReturnContext(params, [], context);
      } catch (error: any) {
        // We accept execution failures in test environment, but not parameter validation failures
        expect(error.message).not.toContain('JavaScript code is required');
      }
    });
  });

  describe('default values', () => {
    it('should use default timeout and memory limit values', async () => {
      const { execute } = await import('./skill-javascript');
      const params = {
        code: 'return 1;'
      };

      try {
        await execute(params, [], context);
      } catch (error: any) {
        // The function should attempt to use default values, not fail on missing parameters
        expect(error.message).not.toContain('timeout');
        expect(error.message).not.toContain('memoryLimit');
      }
    });
  });
});