import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodesType() {
  const { t } = useTranslation();
  return (
    <>
      <h3>Episodes</h3>
      <p>{t('docs.infoType.header')}</p>
      <div>
        <div>
          <NavLink to="/main/info">info: </NavLink>
          <NavLink to="/main/infoType">Info</NavLink>
        </div>
        <div>
          <NavLink to="/main/episodesResultsField">results: </NavLink>
          <NavLink to="/main/episodeType">[Episode]</NavLink>
        </div>
      </div>
    </>
  );
}

export default EpisodesType;
