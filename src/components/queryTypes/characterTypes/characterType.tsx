import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

function CharacterType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[2];
  const { t } = useTranslation();

  return (
    <>
      <h3>{types.name}</h3>
      <h4>{t('docs.characterType.header')}</h4>
      {types.fields && (
        <div>
          <div>
            <div>
              <NavLink to="/main/characterId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>{t('docs.characterType.characterId')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterName')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterStatus">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterStatus')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterSpecies">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterSpecies')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterInnerType">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterSubType')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterGender">{types.fields[5].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterGender')}.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterOrigin">{types.fields[6].name}</NavLink>:
              <NavLink to="/main/locationType">Location</NavLink>
              <p>{t('docs.characterType.characterOrigin')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterLocation">{types.fields[7].name}</NavLink>:
              <NavLink to="/main/locationType">Location</NavLink>
              <p>{t('docs.characterType.characterLocation')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterImage">{types.fields[8].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterImage')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterEpisode">{types.fields[9].name}</NavLink>:
              <NavLink to="/main/episodeType">[Episode]!</NavLink>
              <p>{t('docs.characterType.charaterEpisode')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterCreated">{types.fields[10].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.characterType.characterCreated')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterType;
