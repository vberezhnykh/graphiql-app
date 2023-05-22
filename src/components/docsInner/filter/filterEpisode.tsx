import React from 'react';
import { NavLink } from 'react-router-dom';

function FilterEpisode() {
  return (
    <>
      <h3>FilterEpisode</h3>
      <p>fields</p>
      <div>
        <div>
          <NavLink to="/main/name">name: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/episode">episode: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterEpisode;
