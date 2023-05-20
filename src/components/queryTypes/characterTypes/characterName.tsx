import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterNameComponent() {
  return (
    <>
      <h3>name</h3>
      <p>The name of the character.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterNameComponent;
