import React from 'react';
import { NavLink } from 'react-router-dom';

function CharacterEpisodeComponent() {
  return (
    <>
      <h3>episode</h3>
      <p>Episodes in which this character appeared.).</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/episodeType">[Episode]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterEpisodeComponent;
