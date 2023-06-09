import React from 'react';
import { apiHeadersExample } from '../utils/constants';
import { InputQueryHeadersInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

export function InputQueryHeaders({
  register,
  error,
  headersText,
  changeHeadersText,
}: InputQueryHeadersInterface) {
  const { t } = useTranslation();
  return (
    <>
      <textarea
        id="headers"
        className="tab-textarea"
        {...register}
        placeholder={apiHeadersExample}
        value={headersText}
        onChange={changeHeadersText}
      ></textarea>
      {error && (
        <span style={{ color: 'red', position: 'absolute', top: '60%', left: '40%' }}>
          {t('main.errors.required')} {apiHeadersExample}
        </span>
      )}
    </>
  );
}
