import React from 'react';
import { NavLink } from 'react-router-dom';

function CharactersResultsField() {
  return (
    <>
      <h3>results</h3>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/characterType">[Character]</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharactersResultsField;
