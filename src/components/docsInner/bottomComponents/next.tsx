import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NextComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>next</h3>
      <p>{t('docs.infoType.next')}</p>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/int">Int</NavLink>
    </>
  );
}

export default NextComponent;
