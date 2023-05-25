import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PrevComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>prev</h3>
      <p>{t('docs.infoType.previous')}</p>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default PrevComponent;
