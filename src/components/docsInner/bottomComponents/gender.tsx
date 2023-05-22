import React from 'react';
import { NavLink } from 'react-router-dom';

function GenderComponent() {
  return (
    <>
      <h3>gender</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default GenderComponent;
