import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterGenderComponent() {
  return (
    <>
      <h3>species</h3>
      <p>The gender of the character (`Female`, `Male`, `Genderless` or `unknown`).</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterGenderComponent;
