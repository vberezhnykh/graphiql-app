import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SchemaResponseInterface } from 'utils/interfaces';

function TestComponent() {
  const text: SchemaResponseInterface = useOutletContext();
  return (
    <>
      <div>Hello, I am test component</div>
      <div>{text.data.__schema.types[1].name}</div>
    </>
  );
}

export default TestComponent;
