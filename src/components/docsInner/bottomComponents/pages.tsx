import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PagesComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>pages</h3>
      <p>{t('docs.infoType.amount')}</p>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default PagesComponent;
