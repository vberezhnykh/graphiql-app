import React from 'react';
import { NavLink } from 'react-router-dom';

function TypeComponent() {
  return (
    <>
      <h3>type</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default TypeComponent;
