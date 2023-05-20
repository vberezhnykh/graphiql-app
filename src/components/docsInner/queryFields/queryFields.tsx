import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function QueryFields() {
  const text: SchemaResponseInterface = useOutletContext();
  const fields = text.data.__schema.types[0].fields;
  return (
    <>
      <p>Fields</p>
      {fields && (
        <div>
          <p>Get a specific character by ID</p>
          <p>
            <NavLink to="/main/characterField">{fields[0].name}</NavLink>(id:{' '}
            <NavLink to="/main/id">ID!</NavLink>
            ): <NavLink to="/main/characterType">Character</NavLink>
          </p>
        </div>
      )}
    </>
  );
}

export default QueryFields;
export type TypedQueryFieldsType = typeof QueryFields;
