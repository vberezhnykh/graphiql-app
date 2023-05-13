import { TVariablesInput } from 'types';
import { apiErrorMessage } from '../utils/constants';

export async function getData(
  headersInput: Headers | undefined,
  data: string | undefined | Error,
  variablesInput: undefined | TVariablesInput
) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/graphql`, {
      method: 'POST',
      headers: headersInput,
      body: JSON.stringify({
        query: data,
        variables: variablesInput,
      }),
    });
    const res = await response.json();
    return JSON.stringify(res);
  } catch (e) {
    alert(apiErrorMessage);
  }
}
