import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterStatusComponent() {
  return (
    <>
      <h3>status</h3>
      <p>The status of the character (`Alive`, `Dead` or `unknown`).</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterStatusComponent;
