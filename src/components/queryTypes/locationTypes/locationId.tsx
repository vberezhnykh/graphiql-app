import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationIdComponent() {
  return (
    <>
      <h3>id</h3>
      <p>The id of the location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/id">ID</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationIdComponent;
