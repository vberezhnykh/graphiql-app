import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function StatusComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>status</h3>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default StatusComponent;
