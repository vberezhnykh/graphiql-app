import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeIdComponent() {
  return (
    <>
      <h3>id</h3>
      <p>The id of the episode.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/id">ID</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeIdComponent;
