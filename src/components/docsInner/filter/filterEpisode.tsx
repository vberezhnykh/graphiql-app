import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FilterEpisode() {
  const { t } = useTranslation();
  return (
    <>
      <h3>FilterEpisode</h3>
      <p>{t('docs.filter.header')}</p>
      <div>
        <div>
          <NavLink to="/main/name">{t('docs.filter.name')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
        <div>
          <NavLink to="/main/episode">{t('docs.filter.episode')}: </NavLink>
          <NavLink to="/main/string">String</NavLink>
        </div>
      </div>
    </>
  );
}

export default FilterEpisode;
