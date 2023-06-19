import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterOriginComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>origin</h3>
      <p>{t('docs.characterType.characterOrigin')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/locationType">Location</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterOriginComponent;
