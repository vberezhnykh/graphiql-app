import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { auth, logout } from '../features/firebase';
import { saveUserName } from '../store/features/authSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isSticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect();
    if (!header) return;
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

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
    <header className={`header ${isSticky ? 'header--sticky' : undefined}`} ref={headerRef}>
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
