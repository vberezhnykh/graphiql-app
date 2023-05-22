import React from 'react';
import { NavLink } from 'react-router-dom';

function CharactersField() {
  return (
    <>
      <h3>characters</h3>
      <p>Get the list of all characters</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/charactersType">Characters</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          page: <NavLink to="/main/int">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterCharacter">FilterCharacter</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharactersField;
