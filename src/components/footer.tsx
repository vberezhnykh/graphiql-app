import courseLogoImgSrc from '../assets/course-logo.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <span>
        {t('footer.text.part1')}{' '}
        <a href="https://github.com/vberezhnykh" target="_blank" rel="noopener noreferrer">
          vberezhnykh
        </a>{' '}
        {t('footer.text.part2')}{' '}
        <a href="https://github.com/janChorny" target="_blank" rel="noopener noreferrer">
          janChorny
        </a>{' '}
        {t('footer.text.part3')}
      </span>
      <a href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
        <img src={courseLogoImgSrc} alt="rs-school course logo" />
      </a>
    </footer>
  );
};

export default Footer;
