import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterInnerTypeComponent() {
  return (
    <>
      <h3>type</h3>
      <p>The type or subspecies of the character.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterInnerTypeComponent;
