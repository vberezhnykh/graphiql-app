import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterLocationComponent() {
  return (
    <>
      <h3>location</h3>
      <p>The character`&apos;`s last known location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationType">Location</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterLocationComponent;
