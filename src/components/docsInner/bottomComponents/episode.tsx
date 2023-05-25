import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EpisodeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>episode</h3>
      <p>{t('docs.general.type')}</p>
      <NavLink to="/main/string">String</NavLink>
    </>
  );
}

export default EpisodeComponent;
