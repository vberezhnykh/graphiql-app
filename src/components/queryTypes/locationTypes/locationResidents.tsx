import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationResidentsComponent() {
  return (
    <>
      <h3>residents</h3>
      <p>List of characters who have been last seen in the location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/characterType">[Character]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationResidentsComponent;
