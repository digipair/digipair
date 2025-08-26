// Mock implementation of isolated-vm for testing

const mockContext = {
  global: {
    set: jest.fn().mockResolvedValue(undefined),
    get: jest.fn().mockResolvedValue({})
  }
};

const mockScript = {
  run: jest.fn().mockResolvedValue({
    copy: jest.fn().mockResolvedValue('mock result')
  })
};

const MockIsolate = jest.fn().mockImplementation(() => ({
  createContext: jest.fn().mockResolvedValue(mockContext),
  compileScript: jest.fn().mockResolvedValue(mockScript),
  dispose: jest.fn()
}));

module.exports = {
  Isolate: MockIsolate
};