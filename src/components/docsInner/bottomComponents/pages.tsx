import React from 'react';
import { NavLink } from 'react-router-dom';

function PagesComponent() {
  return (
    <>
      <h3>pages</h3>
      <p>The amount of pages.</p>
      <p>Type</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default PagesComponent;
