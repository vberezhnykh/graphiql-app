import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>location</h3>
      <p>{t('docs.queryFields.locationById')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/locationType">Location</NavLink>
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

export default LocationField;
