import Footer from '../components/footer';
import Header from '../components/header';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="main main--flex">
        <h1>Oops...page not found.</h1>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
