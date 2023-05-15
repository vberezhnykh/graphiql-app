import { useEffect } from 'react';
import Header from '../components/header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../features/firebase';
import { Spin } from 'antd';
import Footer from '../components/footer';

const HomePage = () => {
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;
  }, [user, isLoading]);

  if (isLoading)
    return (
      <main className="main--flex">
        <Spin size="large"></Spin>
      </main>
    );

  return (
    <>
      <Header />
      <main className="main main--flex main__home">
        <p>GraphiQL is a playground/IDE for graphQL requests.</p>
        <p>
          Made by Valentin Berezhnykh and Jan Chorny as a{' '}
          <a
            href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
            target="_blank"
            rel="noreferrer"
          >
            final task
          </a>{' '}
          on the{' '}
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            React course
          </a>{' '}
          organized by RSSchool.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
