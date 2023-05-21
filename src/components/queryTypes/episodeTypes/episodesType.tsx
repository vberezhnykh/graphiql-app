import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodesType() {
  return (
    <>
      <h3>Episodes</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/info">info: </NavLink>
          <NavLink to="/main/infoType">Info</NavLink>
        </div>
        <div>
          <NavLink to="/main/episodesResultsField">results: </NavLink>
          <NavLink to="/main/episodeType">[Episode]</NavLink>
        </div>
      </div>
    </>
  );
}

export default EpisodesType;
