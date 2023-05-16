import { TVariablesInput } from 'types';
import { baseApiGraphQLAddress } from '../utils/constants';
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
    const res = await response.json();
    return JSON.stringify(res);
  } catch (e) {
    const error = ensureError(e);
    alert(error.message);
  }
}
