import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationsType() {
  return (
    <>
      <h3>Locations</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/info">info: </NavLink>
          <NavLink to="/main/infoType">Info</NavLink>
        </div>
        <div>
          <NavLink to="/main/locationsResultsField">results: </NavLink>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </div>
      </div>
    </>
  );
}

export default LocationsType;
