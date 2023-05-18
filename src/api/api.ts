import { TVariablesInput } from 'types';
import { baseApiGraphQLAddress, baseSchemaRequest } from '../utils/constants';
import { ensureError } from '../utils/functions';

export async function getData(
  headersInput: Headers | undefined,
  queryInput: string | undefined | Error,
  variablesInput: undefined | TVariablesInput
) {
  try {
    const response = await fetch(baseApiGraphQLAddress, {
      method: 'POST',
      headers: headersInput,
      body: JSON.stringify({
        query: queryInput,
        variables: variablesInput,
      }),
    });
    if (response.status === 200) {
      const result = await response.json();
      return JSON.stringify(result);
    }
    alert('Check query input');
    const result = await response.json();
    return JSON.stringify(result);
  } catch (e) {
    const error = ensureError(e);
    alert(error.message);
  }
}

export async function getSchema() {
  try {
    const response = await fetch(baseApiGraphQLAddress, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: baseSchemaRequest,
      }),
    });
    if (response.status === 200) {
      const result = await response.json();
      return JSON.stringify(result);
    }
    alert('Not valid schema');
  } catch (e) {
    const error = ensureError(e);
    alert(error.message);
  }
}
