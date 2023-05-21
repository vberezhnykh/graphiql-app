import React from 'react';
import { apiVariablesExample } from '../utils/constants';
import { InputQueryVariablesInterface } from 'utils/interfaces';

export function InputQueryVariables({
  register,
  error,
  variablesText,
  changeVariablesText,
}: InputQueryVariablesInterface) {
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
      {error && <span> Use variables with template like {apiVariablesExample} or live empty</span>}
    </>
  );
}
