import React from 'react';

const IDE = () => {
  return (
    <div className="editor">
      <div className="editor__container">
        <div className="editor__docs">
          <h4 className="editor__header docs-header">Docs</h4>
        </div>
        <div className="editor__request">
          <h4 className="editor__header request-header">Request</h4>
          <textarea className="editor__textarea-request" name="" id=""></textarea>
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
          <button className="editor__request-button">Request</button>
        </div>
        <div className="editor__response">
          <h4 className="editor__header response-header">Response</h4>
          <textarea className="editor__textarea-response" name="" id=""></textarea>
        </div>
      </div>
    </div>
  );
};

export default IDE;
