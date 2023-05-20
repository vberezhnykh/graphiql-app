import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeCodeComponent() {
  return (
    <>
      <h3>episode</h3>
      <p>The code of the episode.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeCodeComponent;
