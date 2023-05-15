import React from 'react';
import { apiHeadersExample } from '../utils/constants';
import { InputQueryHeadersInterface } from 'utils/interfaces';

export function InputQueryHeaders({
  register,
  error,
  headersText,
  changeHeadersText,
}: InputQueryHeadersInterface) {
  return (
    <>
      <textarea
        className="tab-textarea"
        {...register}
        placeholder={apiHeadersExample}
        value={headersText}
        onChange={changeHeadersText}
      ></textarea>
      {error && <span>Required field! Use template like {apiHeadersExample}</span>}
    </>
  );
}
