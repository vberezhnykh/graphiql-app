import { apiHeadersExample, apiVariablesExample, baseQueryRequest } from '../utils/constants';
import { getData } from '../api/api';
import React, { ChangeEvent, Suspense, useRef, useState, lazy } from 'react';
import { Tabs } from './tabs';
import { TTab } from 'types';
import { useForm } from 'react-hook-form';
import { FormInputState } from '../utils/interfaces';
import { InputQueryHeaders } from './inputQueryHeaders';
import { validateQueryHeadersInput, validateQueryVariablesInput } from '../utils/functions';
import { InputQueryVariables } from './inputQueryVariables';

import type { TypedComponentType } from './docs';
const Docs = lazy(() => import('./docs')) as TypedComponentType;

const IDE = () => {
  const [queryMessage, setQueryMessage] = useState<string | undefined>('');
  const ref = useRef<HTMLTextAreaElement>(null);
  const [headersMessage, setHeadersMessage] = useState(apiHeadersExample);
  const changeHeadersMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHeadersMessage(event.target.value);
  };
  const [variablesMessage, setVariablesMessage] = useState(apiVariablesExample);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputState>({ reValidateMode: 'onSubmit' });

  const [statusValid, setStatusValid] = React.useState(false);
  const [renderDocs, setRenderDocs] = React.useState(false);

  const onSubmit = async () => {
    try {
      setStatusValid(true);
      const checkHeadersMessage = headersMessage ? headersMessage : apiHeadersExample;
      const checkVariablesMessage = variablesMessage ? variablesMessage : '{}';
      setQueryMessage(
        await getData(
          JSON.parse(checkHeadersMessage),
          ref?.current?.value,
          JSON.parse(checkVariablesMessage)
        )
      );
      reset();
      setTimeout(() => {
        setStatusValid(false);
      }, 2000);
    } catch (error) {
      setRenderDocs(false);
    }
  };

  return (
    <div className="editor">
      <div className="editor__container">
        <div className="editor__docs">
          <h4 className="editor__header docs-header">Docs</h4>
          <Suspense fallback={'Loading...'}>
            <Docs rend={renderDocs} />
          </Suspense>
        </div>
        <form className="editor__request" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="editor__header request-header">Request</h4>
          <textarea
            className="editor__textarea-request"
            ref={ref}
            placeholder={baseQueryRequest}
            defaultValue={baseQueryRequest}
          ></textarea>
          <div className="editor__request-container">
            <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
            <div className="tabs-container">
              {selectedTabId === tabs[0].id && (
                <InputQueryHeaders
                  error={errors.headers}
                  register={register('headers', {
                    required: true,
                    validate: {
                      validate: (headers) => validateQueryHeadersInput(headers),
                    },
                  })}
                  headersText={headersMessage}
                  changeHeadersText={changeHeadersMessage}
                />
              )}
              {selectedTabId === tabs[1].id && (
                <InputQueryVariables
                  error={errors.variables}
                  register={register('variables', {
                    validate: {
                      validate: (variables) => validateQueryVariablesInput(variables),
                    },
                  })}
                  variablesText={variablesMessage}
                  changeVariablesText={changeVariablesMessage}
                />
              )}
            </div>
          </div>
          <button className="editor__request-button" type="submit">
            Request
          </button>
          {statusValid && <span>Request has been sent</span>}
        </form>
        <div className="editor__response">
          <h4 className="editor__header response-header">Response</h4>
          <textarea
            className="editor__textarea-response"
            value={queryMessage}
            readOnly
            placeholder="Here you get response from API"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default IDE;
