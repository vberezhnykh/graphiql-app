import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharacterInnerTypeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>type</h3>
      <p>{t('docs.characterType.characterSubType')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterInnerTypeComponent;
