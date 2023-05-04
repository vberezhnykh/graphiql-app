import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
        <div>
          <Link to={'/sign-in'}>Sign In</Link>
          <Link to={'/sign-up'}>Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
