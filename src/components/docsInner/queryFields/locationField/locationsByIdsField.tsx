import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationsByIdsField() {
  return (
    <>
      <h3>locationsByIds</h3>
      <p>Get a list of locations selected by ids</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          ids: <NavLink to="/main/id">[ID!]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsByIdsField;
