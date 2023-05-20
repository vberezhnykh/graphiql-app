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
import loader from './features/redirect';
import TestComponent from './components/docsInner/queryFields/testComponent';
import QueryFields from './components/docsInner/queryFields/queryFields';
import Query from './components/docsInner/query';
import IdComponent from './components/docsInner/bottomComponents/id';
import StringComponent from './components/docsInner/bottomComponents/string';
import IntComponent from './components/docsInner/bottomComponents/int';
import CharacterField from './components/docsInner/queryFields/characterField/characterField';
import CharacterType from './components/queryTypes/characterTypes/characterType';
import CharacterIdComponent from './components/queryTypes/characterTypes/characterId';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/reset', element: <Reset /> },
  {
    path: '/main',
    element: <MainPage />,
    loader,
    children: [
      {
        path: 'test',
        element: <TestComponent />,
      },
      {
        path: 'query',
        element: <Query />,
      },
      {
        path: 'fields',
        element: <QueryFields />,
      },
      {
        path: 'id',
        element: <IdComponent />,
      },
      {
        path: 'string',
        element: <StringComponent />,
      },
      {
        path: 'int',
        element: <IntComponent />,
      },
      {
        path: 'characterField',
        element: <CharacterField />,
      },
      {
        path: 'characterType',
        element: <CharacterType />,
      },
      {
        path: 'characterId',
        element: <CharacterIdComponent />,
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
