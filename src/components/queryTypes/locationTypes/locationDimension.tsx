import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationDimensionComponent() {
  return (
    <>
      <h3>dimension</h3>
      <p>The dimension in which the location is located.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationDimensionComponent;
