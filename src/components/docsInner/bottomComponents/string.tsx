import React from 'react';
import { useTranslation } from 'react-i18next';

function StringComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>String</h3>
      <p>{t('docs.bottom.string')}</p>
    </>
  );
}

export default StringComponent;
