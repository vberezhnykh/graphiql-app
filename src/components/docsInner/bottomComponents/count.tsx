import React from 'react';
import { NavLink } from 'react-router-dom';

function CountComponent() {
  return (
    <>
      <h3>count</h3>
      <p>The length of the response.</p>
      <p>Type</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default CountComponent;
