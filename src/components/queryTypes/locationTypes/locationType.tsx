import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

function LocationType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[4];
  const { t } = useTranslation();

  return (
    <>
      <h3>{types.name}</h3>
      <h4>{t('docs.locationType.header')}</h4>
      {types.fields && (
        <div>
          <div>
            <div>
              <NavLink to="/main/locationId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>{t('docs.locationType.locationId')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.locationType.locationName')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationInnerType">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.locationType.locationSubType')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationDimension">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.locationType.locationDimension')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationResidents">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/characterType">[Character]!</NavLink>
              <p>{t('docs.locationType.locationResidents')}</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationCreated">{types.fields[5].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>{t('docs.locationType.locationCreated')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationType;
