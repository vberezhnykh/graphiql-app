import React from 'react';
import { NavLink } from 'react-router-dom';

function NextComponent() {
  return (
    <>
      <h3>next</h3>
      <p>Number of the next page (if it exists)</p>
      <p>Type</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default NextComponent;
