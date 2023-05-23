import { apiHeadersExample, apiVariablesExample, baseQueryRequest } from '../utils/constants';
import { getData, getSchema } from '../api/api';
import React, { ChangeEvent, Suspense, useRef, useState, lazy } from 'react';
import { Tabs } from './tabs';
import { TTab } from 'types/types';
import { useForm } from 'react-hook-form';
import { FormInputState } from '../utils/interfaces';
import { InputQueryHeaders } from './inputQueryHeaders';
import { validateQueryHeadersInput, validateQueryVariablesInput } from '../utils/functions';
import { InputQueryVariables } from './inputQueryVariables';

import type { TypedComponentType } from './docs';
const Docs = lazy(() => import('./docs')) as TypedComponentType;
import { useTranslation } from 'react-i18next';

const IDE = () => {
  const [queryMessage, setQueryMessage] = useState<string | undefined>('');
  const [schemaMessage, setSchemaMessage] = useState<string | undefined>('');
  const ref = useRef<HTMLTextAreaElement>(null);
  const [headersMessage, setHeadersMessage] = useState(apiHeadersExample);
  const changeHeadersMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHeadersMessage(event.target.value);
  };
  const [variablesMessage, setVariablesMessage] = useState(apiVariablesExample);
  const changeVariablesMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setVariablesMessage(event.target.value);
  };

  const { t } = useTranslation();

  const tabs: TTab[] = [
    { id: '1', label: t('main.headers') },
    { id: '2', label: t('main.variables') },
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
  const [showHeadersAndVariables, setShowHeadersAndVariables] = React.useState(false);
  const handleShowHeadersAndVariables = () => {
    event?.stopPropagation();
    setShowHeadersAndVariables(!showHeadersAndVariables);
  };

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
      setSchemaMessage(await getSchema());
      setRenderDocs(true);
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
          <h4 className="editor__header docs-header">{t('main.docs')}</h4>
          <div className="editor__docs-container">
            <Suspense fallback={'Loading...'}>
              <Docs rend={renderDocs} text={schemaMessage} />
            </Suspense>
          </div>
        </div>
        <form className="editor__request" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="editor__header request-header">{t('main.request.heading')}</h4>
          <textarea
            id="request"
            className="editor__textarea-request"
            ref={ref}
            placeholder={baseQueryRequest}
            defaultValue={baseQueryRequest}
          ></textarea>
          <div className="editor__request-container">
            <div className="editor__tabs-group">
              <button
                type="button"
                className="editor__tabs-show-button"
                onClick={handleShowHeadersAndVariables}
              >
                Show(Hide) additional fields
              </button>
              <div className={`editor__tabs-block ${showHeadersAndVariables ? 'hide' : ''}`}>
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
            </div>
          </div>
          <button className="editor__request-button" type="submit">
            {t('main.request.heading')}
          </button>
          {statusValid && <span>{t('main.request.validMsg')}</span>}
        </form>
        <div className="editor__response">
          <h4 className="editor__header response-header">{t('main.response.heading')}</h4>
          <textarea
            id="response"
            className="editor__textarea-response"
            value={queryMessage}
            readOnly
            placeholder={t('main.response.placeholder')}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default IDE;
