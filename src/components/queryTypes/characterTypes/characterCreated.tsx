import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterCreatedComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>created</h3>
      <p>{t('docs.characterType.characterCreated')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterCreatedComponent;
