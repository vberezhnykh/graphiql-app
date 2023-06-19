import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function InfoComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>info</h3>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/infoType">Info</NavLink>
    </>
  );
}

export default InfoComponent;
