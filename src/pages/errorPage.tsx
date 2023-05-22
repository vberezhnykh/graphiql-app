import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="main main--flex">
        <h1>{t('error.heading')}</h1>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
