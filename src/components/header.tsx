import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { auth, logout } from '../features/firebase';
import { saveUserName } from '../store/features/authSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const navLinks = [
    {
      to: '/',
      text: t('header.links.home'),
    },
    {
      to: '/main',
      text: t('header.links.main'),
    },
  ];

  const [user] = useAuthState(auth);
  const dispath = useAppDispatch();

  return (
    <header className="header">
      <div className="header-container">
        <nav className="navigation">
          {...navLinks.map((navLink) => (
            <NavLink
              key={navLink.text}
              to={navLink.to}
              className={({ isActive }) => (isActive ? 'nav-list__item--active' : undefined)}
            >
              {navLink.text}
            </NavLink>
          ))}
        </nav>
        <ul className="header__buttons">
          {user ? (
            <button
              className="logout-button"
              onClick={() => {
                logout();
                dispath(saveUserName(''));
              }}
            >
              {t('header.buttons.signout')}
            </button>
          ) : (
            <>
              <li>
                <Link to={'/login'}>{t('header.buttons.signin')}</Link>
              </li>
              <li>
                <Link to={'/register'} className="header__sign-up">
                  {t('header.buttons.signup')}
                </Link>
              </li>
            </>
          )}
          <LanguageSwitcher />
        </ul>
      </div>
    </header>
  );
};

export default Header;
