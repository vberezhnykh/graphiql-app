import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterImageComponent() {
  return (
    <>
      <h3>image</h3>
      <p>
        Link to the character`s image. All images are 300x300px and most are medium shots or
        portraits since they are intended to be used as avatars.
      </p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterImageComponent;
