import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CharactersField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>characters</h3>
      <p>{t('docs.queryFields.charactersAll')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/charactersType">Characters</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.arguments')}</p>
        <p>
          page: <NavLink to="/main/int">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterCharacter">FilterCharacter</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharactersField;
