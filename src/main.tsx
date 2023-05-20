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
import CharacterNameComponent from './components/queryTypes/characterTypes/characterName';
import CharacterStatusComponent from './components/queryTypes/characterTypes/characterStatus';
import CharacterSpeciesComponent from './components/queryTypes/characterTypes/characterSpecies';
import CharacterInnerTypeComponent from './components/queryTypes/characterTypes/characterInnerType';
import CharacterGenderComponent from './components/queryTypes/characterTypes/characterGender';
import LocationType from './components/queryTypes/locationTypes/locationType';
import CharacterOriginComponent from './components/queryTypes/characterTypes/characterOrigin';
import CharacterLocationComponent from './components/queryTypes/characterTypes/characterLocation';
import CharacterImageComponent from './components/queryTypes/characterTypes/characterImage';
import EpisodeType from './components/queryTypes/episodeTypes/episodeType';
import CharacterEpisodeComponent from './components/queryTypes/characterTypes/characterEpisode';
import CharacterCreatedComponent from './components/queryTypes/characterTypes/characterCreated';
import LocationIdComponent from './components/queryTypes/locationTypes/locationId';
import LocationNameComponent from './components/queryTypes/locationTypes/locationName';
import LocationInnerTypeComponent from './components/queryTypes/locationTypes/locationInnerType';
import LocationDimensionComponent from './components/queryTypes/locationTypes/locationDimension';
import LocationResidentsComponent from './components/queryTypes/locationTypes/locationResidents';
import LocationCreatedComponent from './components/queryTypes/locationTypes/locationCreated';
import EpisodeIdComponent from './components/queryTypes/episodeTypes/episodeId';
import EpisodeNameComponent from './components/queryTypes/episodeTypes/episodeName';
import EpisodeAirDateComponent from './components/queryTypes/episodeTypes/episodeAirDate';
import EpisodeCodeComponent from './components/queryTypes/episodeTypes/episodeCode';
import EpisodeCharactersComponent from './components/queryTypes/episodeTypes/episodeCharacters';
import EpisodeCreatedComponent from './components/queryTypes/episodeTypes/episodeCreated';

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
      {
        path: 'characterName',
        element: <CharacterNameComponent />,
      },
      {
        path: 'characterStatus',
        element: <CharacterStatusComponent />,
      },
      {
        path: 'characterSpecies',
        element: <CharacterSpeciesComponent />,
      },
      {
        path: 'characterInnerType',
        element: <CharacterInnerTypeComponent />,
      },
      {
        path: 'characterGender',
        element: <CharacterGenderComponent />,
      },
      {
        path: 'characterOrigin',
        element: <CharacterOriginComponent />,
      },
      {
        path: 'characterLocation',
        element: <CharacterLocationComponent />,
      },
      {
        path: 'characterImage',
        element: <CharacterImageComponent />,
      },
      {
        path: 'characterEpisode',
        element: <CharacterEpisodeComponent />,
      },
      {
        path: 'characterCreated',
        element: <CharacterCreatedComponent />,
      },
      {
        path: 'locationType',
        element: <LocationType />,
      },
      {
        path: 'locationId',
        element: <LocationIdComponent />,
      },
      {
        path: 'locationName',
        element: <LocationNameComponent />,
      },
      {
        path: 'locationInnerType',
        element: <LocationInnerTypeComponent />,
      },
      {
        path: 'locationDimension',
        element: <LocationDimensionComponent />,
      },
      {
        path: 'locationResidents',
        element: <LocationResidentsComponent />,
      },
      {
        path: 'locationCreated',
        element: <LocationCreatedComponent />,
      },
      {
        path: 'episodeType',
        element: <EpisodeType />,
      },
      {
        path: 'episodeId',
        element: <EpisodeIdComponent />,
      },
      {
        path: 'episodeName',
        element: <EpisodeNameComponent />,
      },
      {
        path: 'episodeAirDate',
        element: <EpisodeAirDateComponent />,
      },
      {
        path: 'episodeCode',
        element: <EpisodeCodeComponent />,
      },
      {
        path: 'episodeCharacters',
        element: <EpisodeCharactersComponent />,
      },
      {
        path: 'episodeCreated',
        element: <EpisodeCreatedComponent />,
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
