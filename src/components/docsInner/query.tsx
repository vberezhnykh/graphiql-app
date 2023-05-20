import React from 'react';
import { SchemaResponseInterface } from '../../utils/interfaces';
import { NavLink, useOutletContext } from 'react-router-dom';

function Query() {
  const text: SchemaResponseInterface = useOutletContext();
  return (
    <>
      <div>
        query: <NavLink to="/main/fields">{text.data.__schema.queryType.name}</NavLink>
      </div>
    </>
  );
}

export default Query;
export type TypedQueryType = typeof Query;
