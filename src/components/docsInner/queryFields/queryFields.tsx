import React from 'react';
import { Type } from '../../../utils/interfaces';

function QueryFields({ fields }: Type) {
  return (
    <>
      {fields?.map((field, index) => (
        <div key={index}>{field.name}</div>
      ))}
    </>
  );
}

export default QueryFields;
export type TypedQueryType = typeof QueryFields;
