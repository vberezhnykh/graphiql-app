import { baseQueryRequest } from '../utils/constants';
import { getData } from '../api/api';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Tabs } from './tabs';
import { TTab } from 'types';

const IDE = () => {
  const [message, setMessage] = useState<string | undefined>('');
  const ref = useRef<HTMLTextAreaElement>(null);
  const [headersMessage, setHeadersMessage] = useState(`{
        "Content-Type": "application/json"
      }`);
  const changeHeadersMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHeadersMessage(event.target.value);
  };
  const [variablesMessage, setVariablesMessage] = useState(`{ "name": "Rick" }`);
  const changeVariablesMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setVariablesMessage(event.target.value);
  };

  const tabs: TTab[] = [
    { id: '1', label: 'Headers' },
    { id: '2', label: 'Variables' },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <div className="editor">
      <div className="editor__container">
        <div className="editor__docs">
          <h4 className="editor__header docs-header">Docs</h4>
        </div>
        <div className="editor__request">
          <h4 className="editor__header request-header">Request</h4>
          <textarea
            className="editor__textarea-request"
            name=""
            id=""
            ref={ref}
            placeholder={baseQueryRequest}
          ></textarea>
          <div className="editor__request-container">
            <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
            <div className="tabs-container">
              {selectedTabId === tabs[0].id && (
                <textarea
                  className="tab-textarea"
                  placeholder="Type headers here"
                  value={headersMessage}
                  onChange={changeHeadersMessage}
                ></textarea>
              )}
              {selectedTabId === tabs[1].id && (
                <textarea
                  className="tab-textarea"
                  placeholder="Type variables here"
                  value={variablesMessage}
                  onChange={changeVariablesMessage}
                ></textarea>
              )}
            </div>
          </div>
          <button
            className="editor__request-button"
            onClick={async () =>
              setMessage(
                await getData(
                  JSON.parse(headersMessage),
                  ref?.current?.value,
                  JSON.parse(variablesMessage)
                )
              )
            }
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
            placeholder="Here you get response from API"
          >
            <pre></pre>
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default IDE;
