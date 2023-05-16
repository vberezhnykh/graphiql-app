import { useEffect } from 'react';
import Header from '../components/header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { Spin } from 'antd';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [user, isLoading] = useAuthState(auth);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!user) return;
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large"></Spin>
      </main>
    );

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header />
      <div>
        <button
          onClick={() => {
            changeLanguage('ru');
          }}
        >
          Ru
        </button>
        <button
          onClick={() => {
            changeLanguage('en');
          }}
        >
          En
        </button>
      </div>
      <main className="main main--flex main__home">
        <p>{t('home.paragraphs.1')}</p>
        <p>
          {t('home.paragraphs.2.part1')}{' '}
          <a
            href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
            target="_blank"
            rel="noreferrer"
          >
            {t('home.paragraphs.2.part2')}
          </a>{' '}
          {t('home.paragraphs.2.part3')}{' '}
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            {t('home.paragraphs.2.part4')}
          </a>{' '}
          {t('home.paragraphs.2.part5')}
        </p>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
