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
import CharactersField from './components/docsInner/queryFields/characterField/charactersField';
import FilterCharacter from './components/docsInner/filter/filterCharacter';
import NameComponent from './components/docsInner/bottomComponents/name';
import StatusComponent from './components/docsInner/bottomComponents/status';
import SpeciesComponent from './components/docsInner/bottomComponents/species';
import TypeComponent from './components/docsInner/bottomComponents/type';
import GenderComponent from './components/docsInner/bottomComponents/gender';
import CharactersType from './components/queryTypes/characterTypes/charactersType';
import InfoComponent from './components/docsInner/bottomComponents/info';
import InfoTypeComponent from './components/docsInner/info/infoType';
import CountComponent from './components/docsInner/bottomComponents/count';
import PagesComponent from './components/docsInner/bottomComponents/pages';
import NextComponent from './components/docsInner/bottomComponents/next';
import PrevComponent from './components/docsInner/bottomComponents/prev';
import CharactersByIdsField from './components/docsInner/queryFields/characterField/charactersByIdsField';
import LocationField from './components/docsInner/queryFields/locationField/locationField';
import LocationsField from './components/docsInner/queryFields/locationField/locationsField';
import CharactersResultsField from './components/docsInner/queryFields/characterField/charactersResultsField';
import LocationsResultsField from './components/docsInner/queryFields/locationField/locationsResultsField';
import LocationsType from './components/queryTypes/locationTypes/locationsType';
import DimensionComponent from './components/docsInner/bottomComponents/dimension';
import FilterLocation from './components/docsInner/filter/filterLocation';
import LocationsByIdsField from './components/docsInner/queryFields/locationField/locationsByIdsField';
import EpisodeField from './components/docsInner/queryFields/episodeField/episodeField';
import EpisodesField from './components/docsInner/queryFields/episodeField/episodesField';
import EpisodesType from './components/queryTypes/episodeTypes/episodesType';
import EpisodesResultsField from './components/docsInner/queryFields/episodeField/episodesResultsField';
import EpisodeComponent from './components/docsInner/bottomComponents/episode';
import FilterEpisode from './components/docsInner/filter/filterEpisode';
import EpisodesByIdsField from './components/docsInner/queryFields/episodeField/episodesByIdsField';
import './features/i18n/i18n';
import { auth, logout } from './features/firebase';

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
        path: 'name',
        element: <NameComponent />,
      },
      {
        path: 'status',
        element: <StatusComponent />,
      },
      {
        path: 'species',
        element: <SpeciesComponent />,
      },
      {
        path: 'type',
        element: <TypeComponent />,
      },
      {
        path: 'gender',
        element: <GenderComponent />,
      },
      {
        path: 'info',
        element: <InfoComponent />,
      },
      {
        path: 'count',
        element: <CountComponent />,
      },
      {
        path: 'pages',
        element: <PagesComponent />,
      },
      {
        path: 'next',
        element: <NextComponent />,
      },
      {
        path: 'prev',
        element: <PrevComponent />,
      },
      {
        path: 'dimension',
        element: <DimensionComponent />,
      },
      {
        path: 'episode',
        element: <EpisodeComponent />,
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
      {
        path: 'charactersField',
        element: <CharactersField />,
      },
      {
        path: 'charactersResultsField',
        element: <CharactersResultsField />,
      },
      {
        path: 'filterCharacter',
        element: <FilterCharacter />,
      },
      {
        path: 'charactersType',
        element: <CharactersType />,
      },
      {
        path: 'infoType',
        element: <InfoTypeComponent />,
      },
      {
        path: 'charactersByIdsField',
        element: <CharactersByIdsField />,
      },
      {
        path: 'locationField',
        element: <LocationField />,
      },
      {
        path: 'locationsField',
        element: <LocationsField />,
      },
      {
        path: 'locationsResultsField',
        element: <LocationsResultsField />,
      },
      {
        path: 'locationsType',
        element: <LocationsType />,
      },
      {
        path: 'filterLocation',
        element: <FilterLocation />,
      },
      {
        path: 'locationsByIdsField',
        element: <LocationsByIdsField />,
      },
      {
        path: 'episodeField',
        element: <EpisodeField />,
      },
      {
        path: 'episodesField',
        element: <EpisodesField />,
      },
      {
        path: 'episodesType',
        element: <EpisodesType />,
      },
      {
        path: 'episodesResultsField',
        element: <EpisodesResultsField />,
      },
      {
        path: 'filterEpisode',
        element: <FilterEpisode />,
      },
      {
        path: 'episodesByIdsField',
        element: <EpisodesByIdsField />,
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

window.setInterval(() => {
  const currentUser = auth.currentUser;
  if (currentUser) logout();
}, 600000);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
