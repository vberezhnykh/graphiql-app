import React from 'react';
import { NavLink } from 'react-router-dom';

function InfoComponent() {
  return (
    <>
      <h3>info</h3>
      <p>Type</p>
      <NavLink to="/main/infoType">Info</NavLink>
    </>
  );
}

export default InfoComponent;
