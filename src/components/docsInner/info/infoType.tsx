import React from 'react';
import { NavLink } from 'react-router-dom';

function InfoTypeComponent() {
  return (
    <>
      <h3>Info</h3>
      <p>fields</p>
      <div>
        <div>
          <p>The length of the response.</p>
          <div>
            <NavLink to="/main/count">count: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>The amount of pages.</p>
          <div>
            <NavLink to="/main/pages">pages: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>Number of the next page (if it exists)</p>
          <div>
            <NavLink to="/main/next">next: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>Number of the previous page (if it exists)</p>
          <div>
            <NavLink to="/main/prev">prev: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoTypeComponent;
