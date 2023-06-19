import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodeCodeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>episode</h3>
      <p>{t('docs.episodeType.episodeCode')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeCodeComponent;
