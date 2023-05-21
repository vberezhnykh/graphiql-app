import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeField() {
  return (
    <>
      <h3>location</h3>
      <p>Get a specific episode by ID</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/episodeType">Episode</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          id: <NavLink to="/main/id">ID!</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeField;
