import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterStatusComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>status</h3>
      <p>{t('docs.characterType.characterStatus')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterStatusComponent;
