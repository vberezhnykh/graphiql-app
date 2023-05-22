import React from 'react';
import { baseQueryRequest } from '../utils/constants';
import { InputQueryInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

export function InputQuery({ register, error }: InputQueryInterface) {
  const { t } = useTranslation();
  return (
    <>
      <textarea
        className="editor__textarea-request"
        {...register}
        placeholder={baseQueryRequest}
        defaultValue={baseQueryRequest}
      ></textarea>
      {error && (
        <span>
          {t('main.errors.required')} {baseQueryRequest}
        </span>
      )}
    </>
  );
}
