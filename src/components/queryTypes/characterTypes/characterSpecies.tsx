import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterSpeciesComponent() {
  return (
    <>
      <h3>species</h3>
      <p>The species of the character.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterSpeciesComponent;
