import React from 'react';

import { DocsRenderInterface } from '../utils/interfaces';

function Docs({ rend, text }: DocsRenderInterface) {
  const message = text;
  const show = rend;

  return <>{show && <div>{message}</div>}</>;
}

export default Docs;
export type TypedComponentType = typeof Docs;
