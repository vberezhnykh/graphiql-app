import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationNameComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>name</h3>
      <p>{t('docs.locationType.locationName')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationNameComponent;
