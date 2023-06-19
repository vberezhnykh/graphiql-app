import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationDimensionComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>dimension</h3>
      <p>{t('docs.locationType.locationDimension')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/string">String</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationDimensionComponent;
