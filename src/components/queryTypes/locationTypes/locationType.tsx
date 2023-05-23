import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function LocationType() {
  const text: SchemaResponseInterface = useOutletContext();
  const types = text.data.__schema.types[4];
  return (
    <>
      <h3>{types.name}</h3>
      <p>Fields</p>
      {types.fields && (
        <div>
          <div>
            <div>
              <NavLink to="/main/locationId">{types.fields[0].name}</NavLink>:
              <NavLink to="/main/id">ID</NavLink>
              <p>The id of the location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationName">{types.fields[1].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The name of the location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationInnerType">{types.fields[2].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The type of the location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationDimension">{types.fields[3].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>The dimension in which the location is located.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationResidents">{types.fields[4].name}</NavLink>:
              <NavLink to="/main/characterType">[Character]!</NavLink>
              <p>List of characters who have been last seen in the location.</p>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/main/locationCreated">{types.fields[5].name}</NavLink>:
              <NavLink to="/main/string">String</NavLink>
              <p>Time at which the location was created in the database.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationType;
