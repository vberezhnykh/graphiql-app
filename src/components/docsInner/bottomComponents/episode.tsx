import React from 'react';
import { NavLink } from 'react-router-dom';

function EpisodeComponent() {
  return (
    <>
      <h3>episode</h3>
      <p>Type</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default EpisodeComponent;
