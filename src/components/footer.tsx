const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Made by{' '}
        <a href="https://github.com/vberezhnykh" target="_blank" rel="noopener noreferrer">
          vberezhnykh
        </a>{' '}
        and{' '}
        <a href="https://github.com/janChorny" target="_blank" rel="noopener noreferrer">
          janChorny
        </a>{' '}
        in 2023
      </span>
      <a href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/course-logo.svg" alt="rs-school course logo" />
      </a>
    </footer>
  );
};

export default Footer;
