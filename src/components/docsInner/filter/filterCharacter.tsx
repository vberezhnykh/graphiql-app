import React from 'react';
import { NavLink } from 'react-router-dom';

function FilterCharacter() {
  return (
    <>
      <h3>FilterCharacter</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/name">name: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/status">status: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/species">species: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/type">type: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/gender">gender: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterCharacter;
