import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationsField() {
  return (
    <>
      <h3>locations</h3>
      <p>Get the list of all locations</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationsType">Locations</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          page: <NavLink to="/main/id">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterLocation">Int</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsField;
