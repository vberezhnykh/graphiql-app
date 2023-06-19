import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

function QueryFields() {
  const text: SchemaResponseInterface = useOutletContext();
  const fields = text.data.__schema.types[0].fields;
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('docs.queryFields.header')}</h3>
      {fields && (
        <div>
          <div>
            <p>{t('docs.queryFields.characterById')}</p>
            <div>
              <NavLink to="/main/characterField">{fields[0].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!</NavLink>
              ): <NavLink to="/main/characterType">Character</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.charactersAll')}</p>
            <div>
              <NavLink to="/main/charactersField">{fields[1].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterCharacter">FilterCharacter): </NavLink>
              <NavLink to="/main/charactersType">Characters</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.charactersByIds')}</p>
            <div>
              <NavLink to="/main/charactersByIdsField">{fields[2].name}</NavLink>(ids:{' '}
              <NavLink to="/main/id">[ID!]!): </NavLink>
              <NavLink to="/main/characterType">[Character]</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.locationById')}</p>
            <div>
              <NavLink to="/main/locationField">{fields[3].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!): </NavLink>
              <NavLink to="/main/locationType">Location</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.locationsAll')}</p>
            <div>
              <NavLink to="/main/locationsField">{fields[4].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterLocation">FilterLocation): </NavLink>
              <NavLink to="/main/locationsType">Locations</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.locationsByIds')}</p>
            <div>
              <NavLink to="/main/locationsByIdsField">{fields[5].name}</NavLink>(ids:{' '}
              <NavLink to="/main/id">[ID!]!): </NavLink>
              <NavLink to="/main/locationType">[Location]</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.episodeById')}</p>
            <div>
              <NavLink to="/main/episodeField">{fields[6].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!): </NavLink>
              <NavLink to="/main/episodeType">Episode</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.episodesAll')}</p>
            <div>
              <NavLink to="/main/episodesField">{fields[7].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterEpisode">FilterEpisode): </NavLink>
              <NavLink to="/main/episodesType">Episodes</NavLink>
            </div>
          </div>
          <div>
            <p>{t('docs.queryFields.episodesByIds')}</p>
            <div>
              <NavLink to="/main/episodesByIdsField">{fields[8].name}</NavLink>(ids:{' '}
              <NavLink to="/main/id">[ID!]!): </NavLink>
              <NavLink to="/main/episodeType">[Episode]</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QueryFields;
export type TypedQueryFieldsType = typeof QueryFields;
