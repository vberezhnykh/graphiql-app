import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
import Reset from './pages/resetPage';
import loader from './features/redirect';
import './features/i18n/i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/reset', element: <Reset /> },
  { path: '/main', element: <MainPage />, loader },
  { path: '*', element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
