import React from 'react';
import { NavLink } from 'react-router-dom';

function DimensionComponent() {
  return (
    <>
      <h3>dimension</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default DimensionComponent;
