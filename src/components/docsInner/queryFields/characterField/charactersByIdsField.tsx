import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharactersByIdsField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>charactersByIds</h3>
      <p>{t('docs.queryFields.charactersByIds')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/characterType">[Characters]</NavLink>
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

export default CharactersByIdsField;
