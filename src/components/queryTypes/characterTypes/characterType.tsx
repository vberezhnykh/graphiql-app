import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function CharacterType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[2];
  return (
    <>
      <h3>{types.name}</h3>
      <p>Fields</p>
      {types.fields && (
        <div>
          <div>
            <div>
              <NavLink to="/main/characterId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>The id of the character.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The name of the character.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterStatus">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The status of the character (`Alive`, `Dead` or `unknown`).</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterSpecies">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The species of the character.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterInnerType">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The type or subspecies of the character.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterGender">{types.fields[5].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The gender of the character (`Female`, `Male`, `Genderless` or `unknown`).</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterOrigin">{types.fields[6].name}</NavLink>:
              <NavLink to="/main/locationType">Location</NavLink>
              <p>The character`s origin location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterLocation">{types.fields[7].name}</NavLink>:
              <NavLink to="/main/locationType">Location</NavLink>
              <p>The character`s last known location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterImage">{types.fields[8].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>
                Link to the character`s image. All images are 300x300px and most are medium shots or
                portraits since they are intended to be used as avatars.
              </p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterEpisode">{types.fields[9].name}</NavLink>:
              <NavLink to="/main/episodeType">[Episode]!</NavLink>
              <p>Episodes in which this character appeared.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/characterCreated">{types.fields[10].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>Time at which the character was created in the database.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterType;
