import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeCharactersComponent() {
  return (
    <>
      <h3>characters</h3>
      <p>List of characters who have been seen in the episode.</p>
      <div>
        <p>Type</p>
        <p>
          <NavLink to="/main/characterType">[Character]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeCharactersComponent;
