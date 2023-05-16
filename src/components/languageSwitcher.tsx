import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <Select
      defaultValue={'en'}
      onChange={handleChange}
      options={[{ value: 'en' }, { value: 'ru' }]}
    />
  );
};

export default LanguageSwitcher;
