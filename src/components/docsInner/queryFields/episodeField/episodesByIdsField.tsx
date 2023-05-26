import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodesByIdsField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>episodesByIds</h3>
      <p>{t('docs.queryFields.episodesByIds')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/episodeType">[Episode]</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.arguments')}</p>
        <p>
          ids: <NavLink to="/main/id">[ID!]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodesByIdsField;
