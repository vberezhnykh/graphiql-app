import React from 'react';
import { DocsRenderInterface, SchemaResponseInterface } from '../utils/interfaces';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { t } from 'i18next';

function Docs({ rend, text }: DocsRenderInterface) {
  const message = text;
  const show = rend;
  const mail: SchemaResponseInterface = message ? JSON.parse(message) : '{}';
  const navigate = useNavigate();

  return (
    <>
      {show && message && (
        <div className="docs-inner-container">
          <div className="docs-inner-block">
            <button className="docs-inner-start docs-btn">
              <NavLink to="/main/query">{t('docs.open')}</NavLink>
            </button>
            <button className="btn docs-inner-button docs-btn" onClick={() => navigate(-1)}>
              {t('docs.button')}
            </button>
          </div>
          <Outlet context={mail} />
        </div>
      )}
    </>
  );
}

export default Docs;
export type TypedComponentType = typeof Docs;
