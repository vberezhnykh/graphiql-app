import React from 'react';
import { NavLink } from 'react-router-dom';

function FilterLocation() {
  return (
    <>
      <h3>FilterLocation</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/name">name: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/type">type: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/dimension">dimension: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterLocation;
