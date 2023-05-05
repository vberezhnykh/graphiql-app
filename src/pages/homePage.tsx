import Header from '../components/header';
import { useAppSelector } from '../store/hooks';

const HomePage = () => {
  const name = useAppSelector((store) => store.auth.userName);

  return (
    <>
      <Header />
      <main className="main main--flex">{name ? `Hello, ${name}` : `Please login first...`}</main>
      <footer>Footer Template</footer>
    </>
  );
};

export default HomePage;
