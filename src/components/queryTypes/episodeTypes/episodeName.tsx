import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeNameComponent() {
  return (
    <>
      <h3>name</h3>
      <p>The name of the episode.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeNameComponent;
