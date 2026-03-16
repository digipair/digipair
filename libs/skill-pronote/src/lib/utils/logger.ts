export function error(label: string, value: string = ''): never {
  throw new Error(`[PRONOTE] ${label}: ${value}`);
}
