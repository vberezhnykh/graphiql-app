import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FilterLocation() {
  const { t } = useTranslation();
  return (
    <>
      <h3>FilterLocation</h3>
      <p>{t('docs.filter.header')}</p>
      <div>
        <div>
          <NavLink to="/main/name">{t('docs.filter.name')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/type">{t('docs.filter.type')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/dimension">{t('docs.filter.dimension')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterLocation;
