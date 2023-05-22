import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationCreatedComponent() {
  return (
    <>
      <h3>created</h3>
      <p>Time at which the location was created in the database.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationCreatedComponent;
