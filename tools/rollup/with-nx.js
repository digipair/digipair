exports.withNxDigipair = (formats, callbackOptions) => {
  return formats.map(format => {
    const result = callbackOptions({ format });

    if (format !== formats[0]) {
      result.plugins = result.plugins.filter(
        p => p.name !== 'rollup-plugin-nx-delete-output',
      );
    }

    return result;
  });
};
