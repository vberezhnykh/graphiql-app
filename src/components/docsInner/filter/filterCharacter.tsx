import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FilterCharacter() {
  const { t } = useTranslation();
  return (
    <>
      <h3>FilterCharacter</h3>
      <p>{t('docs.filter.header')}</p>
      <div>
        <div>
          <NavLink to="/main/name">{t('docs.filter.name')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/status">{t('docs.filter.status')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/species">{t('docs.filter.species')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/type">{t('docs.filter.type')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/gender">{t('docs.filter.gender')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterCharacter;
