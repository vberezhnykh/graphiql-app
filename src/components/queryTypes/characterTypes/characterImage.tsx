import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterImageComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>image</h3>
      <p>{t('docs.characterType.characterImage')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterImageComponent;
