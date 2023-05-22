import React from 'react';
import { apiVariablesExample } from '../utils/constants';
import { InputQueryVariablesInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

export function InputQueryVariables({
  register,
  error,
  variablesText,
  changeVariablesText,
}: InputQueryVariablesInterface) {
  const { t } = useTranslation();
  return (
    <>
      <textarea
        id="variables"
        className="tab-textarea"
        {...register}
        placeholder={apiVariablesExample}
        value={variablesText}
        onChange={changeVariablesText}
      ></textarea>
      {error && (
        <span>
          {t('main.errors.variables')} {apiVariablesExample} or live empty
        </span>
      )}
    </>
  );
}
