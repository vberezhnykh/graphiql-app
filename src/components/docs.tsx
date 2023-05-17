import React from 'react';
import { apiHeadersExample, apiVariablesExample, baseQueryRequest } from '../utils/constants';
import { DocsRenderInterface } from '../utils/interfaces';

function Docs({ rend }: DocsRenderInterface) {
  return (
    <>
      {rend && (
        <div>
          <div>To begin with start form query</div>
          <div>
            Fill in the Query field like <pre>{baseQueryRequest}</pre>
          </div>
          <div>
            Than check Headers field with the correct input, like <pre>{apiHeadersExample}</pre>
          </div>
          <div>
            And at last Check the variables field, if you use it, or live it empty
            <pre>{apiVariablesExample}</pre>{' '}
          </div>
        </div>
      )}
    </>
  );
}

export default Docs;
export type TypedComponentType = typeof Docs;
