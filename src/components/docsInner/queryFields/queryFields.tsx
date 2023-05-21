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
          <div>
            <p>Get a specific character by ID</p>
            <p>
              <NavLink to="/main/characterField">{fields[0].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!</NavLink>
              ): <NavLink to="/main/characterType">Character</NavLink>
            </p>
          </div>
          <div>
            <p>Get the list of all characters</p>
            <p>
              <NavLink to="/main/charactersField">{fields[1].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterCharacter">FilterCharacter): </NavLink>
              <NavLink to="/main/charactersType">Characters</NavLink>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default QueryFields;
export type TypedQueryFieldsType = typeof QueryFields;
