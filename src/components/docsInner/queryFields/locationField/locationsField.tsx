import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationsField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>locations</h3>
      <p>{t('docs.queryFields.locationsAll')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/locationsType">Locations</NavLink>
        </p>
      </div>
      <div>
        <p>{t('docs.general.arguments')}</p>
        <p>
          page: <NavLink to="/main/id">Int</NavLink>
        </p>
        <p>
          filter: <NavLink to="/main/filterLocation">FilterLocation</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsField;
