import React from 'react';
import { QueryType } from '../../utils/interfaces';
import { NavLink } from 'react-router-dom';

function Query({ name }: QueryType) {
  return (
    <>
      <div>
        query: <NavLink to="/main/test">{name}</NavLink>
      </div>
    </>
  );
}

export default Query;
export type TypedQueryType = typeof Query;
