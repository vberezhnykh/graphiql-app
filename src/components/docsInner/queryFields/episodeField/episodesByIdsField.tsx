import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodesByIdsField() {
  return (
    <>
      <h3>episodesByIds</h3>
      <p>Get a list of episodes selected by ids</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/episodeType">[Episode]</NavLink>
        </p>
      </div>
      <div>
        <p>Arguments</p>
        <p>
          ids: <NavLink to="/main/id">[ID!]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodesByIdsField;
