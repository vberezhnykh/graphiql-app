import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterIdComponent() {
  return (
    <>
      <h3>id</h3>
      <p>The id of the character.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/id">ID</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterIdComponent;
