import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodeCharactersComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>characters</h3>
      <p>{t('docs.episodeType.episodeCharacters')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/characterType">[Character]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default EpisodeCharactersComponent;
