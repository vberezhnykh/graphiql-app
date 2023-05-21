import React from 'react';
import { NavLink } from 'react-router-dom';

function CharactersType() {
  return (
    <>
      <h3>Characters</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/info">info: </NavLink>
          <NavLink to="/main/infoType">Info</NavLink>
        </div>
        <div>
          <NavLink to="/main/results">results: </NavLink>
          <NavLink to="/main/characterType">[Character]</NavLink>
        </div>
      </div>
    </>
  );
}

export default CharactersType;
