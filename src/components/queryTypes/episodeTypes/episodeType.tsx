import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function EpisodeType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[5];
  return (
    <>
      <h3>{types.name}</h3>
      <p>Fields</p>
      {types.fields && (
        <div>
          <div>
            <p>
              <NavLink to="/main/episodeId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>The id of the episode.</p>
            </p>
          </div>
          <div>
            <p>
              <NavLink to="/main/episodeName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>The name of the episode.</p>
            </p>
          </div>
          <div>
            <p>
              <NavLink to="/main/episodeAirDate">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>The air date of the episode.</p>
            </p>
          </div>
          <div>
            <p>
              <NavLink to="/main/episodeCode">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/id">String</NavLink>
              <p>The code of the episode.</p>
            </p>
          </div>
          <div>
            <p>
              <NavLink to="/main/episodeCharacters">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/characterType">[Character]!</NavLink>
              <p>List of characters who have been seen in the episode.</p>
            </p>
          </div>
          <div>
            <p>
              <NavLink to="/main/episodeCreated">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>Time at which the episode was created in the database.</p>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default EpisodeType;
