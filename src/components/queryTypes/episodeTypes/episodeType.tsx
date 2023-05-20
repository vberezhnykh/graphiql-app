import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function EpisodeType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[5];
  return (
    <>
      <h3>{types.name}</h3>
      <p>Fields</p>
      {types.fields && (
        <div>
          <div>
            <p>
              <NavLink to="/main/characterId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>The id of the character.</p>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default EpisodeType;
