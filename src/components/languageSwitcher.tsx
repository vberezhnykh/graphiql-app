import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import enImgSrc from '../assets/en-flag.png';
import ruImgSrc from '../assets/ru-flag.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue={i18n.language}
      onChange={handleChange}
      optionLabelProp="children"
      options={[
        { value: 'en', label: <img src={enImgSrc} height={'30px'} /> },
        { value: 'ru', label: <img src={ruImgSrc} height={'30px'} /> },
      ]}
      className="language-switcher"
    />
  );
};

export default LanguageSwitcher;
