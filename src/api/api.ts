export async function getData(data: string | undefined | Error) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: data,
      }),
    });
    const res = await response.json();
    return JSON.stringify(res);
  } catch (e) {
    const error = ensureError(e);
    return error.message;
  }
}

export function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  return error;
}
