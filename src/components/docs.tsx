import React from 'react';
import { DocsRenderInterface, SchemaResponseInterface } from '../utils/interfaces';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Docs({ rend, text }: DocsRenderInterface) {
  const message = text;
  const show = rend;
  const mail: SchemaResponseInterface = message ? JSON.parse(message) : '{}';
  const navigate = useNavigate();

  return (
    <>
      {show && message && (
        <div className="docs-inner-container">
          <button className="btn docs-inner-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <div className="docs-inner-start">
            <NavLink to="/main/query">Start</NavLink>
          </div>
          <Outlet context={mail} />
        </div>
      )}
    </>
  );
}

export default Docs;
export type TypedComponentType = typeof Docs;
