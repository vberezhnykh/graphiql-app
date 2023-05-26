import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationCreatedComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>created</h3>
      <p>{t('docs.locationType.locationCreated')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationCreatedComponent;
