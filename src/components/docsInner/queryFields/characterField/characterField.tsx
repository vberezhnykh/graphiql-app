import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

function CharacterField() {
  const text: SchemaResponseInterface = useOutletContext();
  const character = text.data.__schema.types[2].name;
  const { t } = useTranslation();
  return (
    <>
      <h3>character</h3>
      <p>{t('docs.queryFields.characterById')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/characterType">{character}</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.arguments')}</p>
        <p>
          id: <NavLink to="/main/id">ID!</NavLink>
        </p>
      </div>
    </>
  );
}

export default CharacterField;
