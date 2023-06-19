import React from 'react';
import { useTranslation } from 'react-i18next';

function IdComponent() {
  const { t } = useTranslation();
  return (
    <>
      <h3>ID</h3>
      <p>{t('docs.bottom.id')}</p>
    </>
  );
}

export default IdComponent;
