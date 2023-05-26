import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodesField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>episodes</h3>
      <p>{t('docs.queryFields.episodesAll')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/episodesType">Episodes</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.arguments')}</p>
        <p>
          page: <NavLink to="/main/int">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterEpisode">FilterEpisode</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodesField;
