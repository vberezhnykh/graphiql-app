import React from 'react';
import { baseQueryRequest } from '../utils/constants';
import { InputQueryInterface } from 'utils/interfaces';

export function InputQuery({ register, error }: InputQueryInterface) {
  return (
    <>
      <textarea
        className="editor__textarea-request"
        {...register}
        placeholder={baseQueryRequest}
        defaultValue={baseQueryRequest}
      ></textarea>
      {error && <span>Required field! Use template like {baseQueryRequest}</span>}
    </>
  );
}
