import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationField() {
  return (
    <>
      <h3>location</h3>
      <p>Get a specific locations by ID</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationType">Location</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          id: <NavLink to="/main/id">ID!</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationField;
