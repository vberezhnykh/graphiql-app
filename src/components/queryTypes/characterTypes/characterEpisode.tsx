import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterEpisodeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>episode</h3>
      <p>{t('docs.characterType.characterEpisode')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/episodeType">[Episode]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterEpisodeComponent;
