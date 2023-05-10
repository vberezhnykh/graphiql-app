import { getData } from '../api/api';
import React, { useRef, useState } from 'react';

const IDE = () => {
  const [message, setMessage] = useState<string | undefined>('');
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="editor">
      <div className="editor__container">
        <div className="editor__docs">
          <h4 className="editor__header docs-header">Docs</h4>
        </div>
        <div className="editor__request">
          <h4 className="editor__header request-header">Request</h4>
          <textarea className="editor__textarea-request" name="" id="" ref={ref}></textarea>
          <div className="editor__request-container">
            <div className="editor__headers">
              <h5 className="editor__request-inner-header">Headers</h5>
              <div className="editor__request-inner-body">Headers body</div>
            </div>
            <div className="editor__variables">
              <h5 className="editor__request-inner-header">Variables</h5>
              <div className="editor__request-inner-body">Variables body</div>
            </div>
          </div>
          <button
            className="editor__request-button"
            onClick={async () => setMessage(await getData(ref?.current?.value))}
          >
            Request
          </button>
        </div>
        <div className="editor__response">
          <h4 className="editor__header response-header">Response</h4>
          <textarea
            className="editor__textarea-response"
            name=""
            id=""
            value={message}
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default IDE;
