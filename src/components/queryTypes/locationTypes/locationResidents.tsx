import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationResidentsComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>residents</h3>
      <p>{t('docs.locationType.locationResidents')}</p>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/characterType">[Character]!</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationResidentsComponent;
