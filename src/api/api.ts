import { TVariablesInput } from 'types/types';
import { queryErrorMessage, baseApiGraphQLAddress } from '../utils/constants';

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
    alert(queryErrorMessage);
  }
}
