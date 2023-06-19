import React from 'react';
import { useTranslation } from 'react-i18next';

function IntComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>Int</h3>
      <p>{t('docs.bottom.int')}</p>
    </>
  );
}

export default IntComponent;
