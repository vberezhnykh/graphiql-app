import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function InfoTypeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>Info</h3>
      <p>{t('docs.infoType.header')}</p>
      <div>
        <div>
          <p>{t('docs.infoType.length')}</p>
          <div>
            <NavLink to="/main/count">count: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>{t('docs.infoType.amount')}</p>
          <div>
            <NavLink to="/main/pages">pages: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>{t('docs.infoType.next')}</p>
          <div>
            <NavLink to="/main/next">next: </NavLink>
            <NavLink to="/main/int">Int</NavLink>
          </div>
        </div>
        <div>
          <p>{t('docs.infoType.previous')}</p>
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
