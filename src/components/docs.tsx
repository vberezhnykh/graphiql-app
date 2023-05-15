import React from 'react';
import { apiHeadersExample, apiVariablesExample, baseQueryRequest } from '../utils/constants';

export function Docs() {
  return (
    <>
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
    </>
  );
}
