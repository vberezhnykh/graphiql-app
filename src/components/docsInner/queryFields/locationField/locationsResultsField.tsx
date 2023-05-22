import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationsResultsField() {
  return (
    <>
      <h3>results</h3>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsResultsField;
