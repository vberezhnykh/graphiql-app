import React from 'react';

import { DocsRenderInterface, SchemaResponseInterface } from '../utils/interfaces';
import Query from './docsInner/query';
import QueryFields from './docsInner/queryFields/queryFields';
import { Outlet, useNavigate } from 'react-router-dom';

function Docs({ rend, text }: DocsRenderInterface) {
  const message = text;
  const show = rend;
  const mail: SchemaResponseInterface = message ? JSON.parse(message) : '{}';
  const navigate = useNavigate();

  return (
    <>
      {show && message && (
        <div>
          {/* <div>{mail.data.__schema.queryType.name}</div>
          <div>{JSON.stringify(mail.data.__schema.types[0])}</div> */}
          <button className="btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <Outlet />
          <Query name={mail.data.__schema.queryType.name} />
          <QueryFields
            fields={mail.data.__schema.types[0].fields}
            kind={mail.data.__schema.types[0].kind}
            name={mail.data.__schema.types[0].name}
            possibleTypes={mail.data.__schema.types[0].possibleTypes}
          />
        </div>
      )}
    </>
  );
}

export default Docs;
export type TypedComponentType = typeof Docs;
