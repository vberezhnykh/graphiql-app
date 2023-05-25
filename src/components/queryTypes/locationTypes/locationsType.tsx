import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationsType() {
  const { t } = useTranslation();
  return (
    <>
      <h3>Locations</h3>
      <p>{t('docs.infoType.header')}</p>
      <div>
        <div>
          <NavLink to="/main/info">info: </NavLink>
          <NavLink to="/main/infoType">Info</NavLink>
        </div>
        <div>
          <NavLink to="/main/locationsResultsField">results: </NavLink>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </div>
      </div>
    </>
  );
}

export default LocationsType;
