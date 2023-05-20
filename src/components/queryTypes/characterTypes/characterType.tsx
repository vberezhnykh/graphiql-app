import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function CharacterType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[2];
  return (
    <>
      <h3>{types.name}</h3>
      <p>Fields</p>
      {types.fields && (
        <div>
          <p>The id of the character.</p>
          <p>
            <NavLink to="/main/characterId">{types.fields[0].name}</NavLink>:
            <NavLink to="/main/id">ID!</NavLink>
          </p>
        </div>
      )}
    </>
  );
}

export default CharacterType;
