import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function QueryFields() {
  const text: SchemaResponseInterface = useOutletContext();
  const fields = text.data.__schema.types[0].fields;
  return (
    <>
      <p>Fields</p>
      {fields && (
        <div>
          <div>
            <p>Get a specific character by ID</p>
            <div>
              <NavLink to="/main/characterField">{fields[0].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!</NavLink>
              ): <NavLink to="/main/characterType">Character</NavLink>
            </div>
          </div>
          <div>
            <p>Get the list of all characters</p>
            <div>
              <NavLink to="/main/charactersField">{fields[1].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterCharacter">FilterCharacter): </NavLink>
              <NavLink to="/main/charactersType">Characters</NavLink>
            </div>
          </div>
          <div>
            <p>Get a list of characters selected by ids</p>
            <div>
              <NavLink to="/main/charactersByIdsField">{fields[2].name}</NavLink>(ids:{' '}
              <NavLink to="/main/id">[ID!]!): </NavLink>
              <NavLink to="/main/characterType">[Character]</NavLink>
            </div>
          </div>
          <div>
            <p>Get a specific locations by ID</p>
            <div>
              <NavLink to="/main/locationField">{fields[3].name}</NavLink>(id:{' '}
              <NavLink to="/main/id">ID!): </NavLink>
              <NavLink to="/main/locationType">Location</NavLink>
            </div>
          </div>
          <div>
            <p>Get the list of all locations</p>
            <div>
              <NavLink to="/main/locationsField">{fields[4].name}</NavLink>(page:{' '}
              <NavLink to="/main/int">Int </NavLink>filter:
              <NavLink to="/main/filterLocation">FilterLocation): </NavLink>
              <NavLink to="/main/locationsType">Locations</NavLink>
            </div>
          </div>
          <div>
            <p>Get a list of locations selected by ids</p>
            <div>
              <NavLink to="/main/locationsByIdsField">{fields[5].name}</NavLink>(ids:{' '}
              <NavLink to="/main/id">[ID!]!): </NavLink>
              <NavLink to="/main/locationType">[Location]</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QueryFields;
export type TypedQueryFieldsType = typeof QueryFields;
