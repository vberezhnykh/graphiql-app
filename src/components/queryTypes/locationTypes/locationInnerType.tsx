import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationInnerTypeComponent() {
  return (
    <>
      <h3>type</h3>
      <p>The type of the location.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationInnerTypeComponent;
