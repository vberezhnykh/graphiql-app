import IDE from '../components/ide';
import Header from '../components/header';

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main--flex main">
        <IDE />
      </main>
      <footer>Footer Template</footer>
    </>
  );
};

export default MainPage;
