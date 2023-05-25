import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodeAirDateComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>air date</h3>
      <p>{t('docs.episodeType.episodeAirDate')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeAirDateComponent;
