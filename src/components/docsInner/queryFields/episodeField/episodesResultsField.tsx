import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodesResultsField() {
  return (
    <>
      <h3>results</h3>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/episodeType">[Episode]</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodesResultsField;
