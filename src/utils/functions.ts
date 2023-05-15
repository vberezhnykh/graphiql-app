export function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {}
  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  return error;
}

export const validateQueryHeadersInput = (text: string) => {
  let count = 0;
  const strArr = text.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '"') count += 1;
  }
  if (strArr.includes('{') && strArr.includes('}') && count % 4 === 0) return true;
  return false;
};

export const validateQueryVariablesInput = (text: string) => {
  let count = 0;
  const strArr = text.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '"') count += 1;
  }
  if ((strArr.includes('{') && strArr.includes('}') && count % 4 === 0) || text.length === 0)
    return true;
  return false;
};
