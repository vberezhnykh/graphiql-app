import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationNameComponent() {
  return (
    <>
      <h3>name</h3>
      <p>The name of the location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationNameComponent;
