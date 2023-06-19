import React from 'react';
import { baseQueryRequest } from '../utils/constants';
import { InputQueryInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

export function InputQuery({ register, error, queryText, changeQueryText }: InputQueryInterface) {
  const { t } = useTranslation();
  return (
    <>
      <textarea
        id="request"
        className="editor__textarea-request"
        {...register}
        placeholder={baseQueryRequest}
        value={queryText}
        onChange={changeQueryText}
      ></textarea>
      {error && (
        <span style={{ color: 'red', position: 'absolute', top: '50%', right: '25%', left: '25%' }}>
          {t('main.errors.required')}: {baseQueryRequest}
        </span>
      )}
    </>
  );
}
