import React from 'react';

import { DocsRenderInterface, SchemaResponseInterface } from '../utils/interfaces';

function Docs({ rend, text }: DocsRenderInterface) {
  const message = text;
  const show = rend;
  const mail: SchemaResponseInterface = message ? JSON.parse(message) : '{}';

  return (
    <>
      {show && message && (
        <div>
          <div>{mail.data.__schema.queryType.name}</div>
          <div>{JSON.stringify(mail.data.__schema.types[0])}</div>
        </div>
      )}
    </>
  );
}

export default Docs;
export type TypedComponentType = typeof Docs;
