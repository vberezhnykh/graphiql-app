import React from 'react';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/reset', element: <Reset /> },
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
