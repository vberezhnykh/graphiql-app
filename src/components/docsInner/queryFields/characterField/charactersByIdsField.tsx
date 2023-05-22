import React from 'react';
import { NavLink } from 'react-router-dom';

function CharactersByIdsField() {
  return (
    <>
      <h3>charactersByIds</h3>
      <p>Get a list of characters selected by ids</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/characterType">[Characters]</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          ids: <NavLink to="/main/id">[ID!]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharactersByIdsField;
