import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../features/firebase';
import { saveUserName, saveUserToken } from '../store/features/authSlice';
import { toast } from 'react-toastify';

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

  const userToken = useAppSelector((state) => state.auth.userToken);
  const dispath = useAppDispatch();
  const navigate = useNavigate();

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
        {userToken ? (
          <button
            onClick={() => {
              logout();
              sessionStorage.removeItem('Auth Token');
              sessionStorage.removeItem('userName');
              dispath(saveUserToken(''));
              dispath(saveUserName(''));
              navigate('/');
            }}
          >
            Sign out
          </button>
        ) : (
          <ul className="header__buttons">
            <li>
              <Link to={'/sign-in'}>Sign In</Link>
            </li>
            <li>
              <Link to={'/sign-up'}>Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
