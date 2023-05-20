import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function characterField() {
  const text: SchemaResponseInterface = useOutletContext();
  const character = text.data.__schema.types[2].name;
  return (
    <>
      <h3>character</h3>
      <p>Get a specific character by ID</p>
      <div>
        <p>Type</p>
        <p>{character}</p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          id: <NavLink to="/main/id">ID!</NavLink>
        </p>
      </div>
    </>
  );
}

export default characterField;
