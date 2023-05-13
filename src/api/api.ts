import { apiErrorMessage } from '../utils/constants';

export async function getData(headersInput: Headers | undefined, data: string | undefined | Error) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/graphql`, {
      method: 'POST',
      headers: headersInput,
      body: JSON.stringify({
        query: data,
      }),
    });
    const res = await response.json();
    return JSON.stringify(res);
  } catch (e) {
    alert(apiErrorMessage);
  }
}
