import React from 'react';
import { NavLink } from 'react-router-dom';

function StatusComponent() {
  return (
    <>
      <h3>status</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default StatusComponent;