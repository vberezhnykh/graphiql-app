import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationsByIdsField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>locationsByIds</h3>
      <p>{t('docs.queryFields.locationsByIds')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          ids: <NavLink to="/main/id">[ID!]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsByIdsField;
