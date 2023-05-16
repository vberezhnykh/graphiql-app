import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { auth, logout } from '../features/firebase';
import { saveUserName } from '../store/features/authSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import LanguageSwitcher from './languageSwitcher';

const Header = () => {
  const navLinks = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/main',
      text: 'Main',
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
              Sign out
            </button>
          ) : (
            <>
              <li>
                <Link to={'/login'}>Sign In</Link>
              </li>
              <li>
                <Link to={'/register'} className="header__sign-up">
                  Sign Up
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
