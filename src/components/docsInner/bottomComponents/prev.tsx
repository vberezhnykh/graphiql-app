import React from 'react';
import { NavLink } from 'react-router-dom';

function PrevComponent() {
  return (
    <>
      <h3>next</h3>
      <p>Number of the previous page (if it exists)</p>
      <p>Type</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default PrevComponent;
