import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CountComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>count</h3>
      <p>{t('docs.infoType.length')}</p>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default CountComponent;
