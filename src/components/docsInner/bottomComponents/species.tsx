import React from 'react';
import { NavLink } from 'react-router-dom';

function SpeciesComponent() {
  return (
    <>
      <h3>species</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default SpeciesComponent;
