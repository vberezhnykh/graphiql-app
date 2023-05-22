import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodesField() {
  return (
    <>
      <h3>episodes</h3>
      <p>Get the list of all episodes</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/episodesType">Episodes</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          page: <NavLink to="/main/int">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterEpisode">FilterEpisode</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodesField;
