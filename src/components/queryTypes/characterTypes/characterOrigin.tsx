import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterOriginComponent() {
  return (
    <>
      <h3>origin</h3>
      <p>The character`s origin location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationType">Location</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterOriginComponent;
