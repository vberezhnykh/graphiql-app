import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodeIdComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>id</h3>
      <p>{t('docs.episodeType.episodeId')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/id">ID</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeIdComponent;
