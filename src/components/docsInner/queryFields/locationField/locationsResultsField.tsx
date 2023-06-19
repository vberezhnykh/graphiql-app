import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocationsResultsField() {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('docs.general.results')}</h3>
      <div>
        <p>{t('docs.general.type')}</p>
        <p>
          <NavLink to="/main/locationType">[Location]</NavLink>
        </p>
      </div>
    </>
  );
}

export default LocationsResultsField;
