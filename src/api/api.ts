import { TVariablesInput } from 'types/types';
import { baseApiGraphQLAddress, baseSchemaRequest } from '../utils/constants';
import { ensureError } from '../utils/functions';
import { toast } from 'react-toastify';
import { t } from 'i18next';

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
      toast.success(t('request.success'));
      return JSON.stringify(result);
    }
    toast.error(t('request.fail'));
    const result = await response.json();
    return JSON.stringify(result);
  } catch (e) {
    toast.error(t('request.fail'));
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
    ensureError(e);
  }
}
