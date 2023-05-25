import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

function EpisodeType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[5];
  const { t } = useTranslation();

  return (
    <>
      <h3>{types.name}</h3>
      <h4>{t('docs.episodeType.header')}</h4>
      {types.fields && (
        <div>
          <div>
            <div>
              <NavLink to="/main/episodeId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>{t('docs.episodeType.episodeId')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/episodeName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>{t('docs.episodeType.episodeName')}.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/episodeAirDate">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>{t('docs.episodeType.episodeAirDate')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/episodeCode">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>{t('docs.episodeType.episodeCode')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/episodeCharacters">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/characterType">[Character]!</NavLink>
              <p>{t('docs.episodeType.episodeCharacters')}.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/episodeCreated">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.episodeType.episodeCreated')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EpisodeType;
