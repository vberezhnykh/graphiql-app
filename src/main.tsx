import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import SignUpPage from './pages/signUpPage';
import LoginPage from './pages/loginPage';
import loader from './features/redirect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/sign-in', element: <LoginPage />, loader },
  { path: '/sign-up', element: <SignUpPage />, loader },
  { path: '/main', element: <MainPage /> },
  { path: '*', element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
