import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeAirDateComponent() {
  return (
    <>
      <h3>air date</h3>
      <p>The air date of the episode.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeAirDateComponent;
