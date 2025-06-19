import { applyTemplate } from "@digipair/engine";

const output = applyTemplate('Hello {{name}}!', { name: 'Test' });
console.log(output); // => Hello Test!
