import React from 'react';

function IdComponent() {
  return (
    <>
      <h3>ID</h3>
      <p>
        The ID scalar type represents a unique identifier, often used to refetch an object or as key
        for a cache. The ID type appears in a JSON response as a String; however, it is not intended
        to be human-readable. When expected as an input type, any string (such as `&quot;`4`&quot;`)
        or integer (such as 4) input value will be accepted as an ID.
      </p>
    </>
  );
}

export default IdComponent;
