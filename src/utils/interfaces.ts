import { ChangeEventHandler, RefObject } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

export interface FormInputState {
  headers: string;
  query: string;
  variables: string;
}

export interface FormInput {
  headers: string;
  query: string;
  variables: string;
}

export interface InputQueryHeadersInterface {
  register: UseFormRegisterReturn<'headers'>;
  error: FieldError | undefined;
  headersText: string | undefined;
  changeHeadersText: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface InputQueryVariablesInterface {
  register: UseFormRegisterReturn<'variables'>;
  error: FieldError | undefined;
  variablesText: string | undefined;
  changeVariablesText: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface InputQueryInterface {
  register: UseFormRegisterReturn<'query'>;
  error: FieldError | undefined;
  queryText: RefObject<HTMLTextAreaElement> | undefined;
}

export interface DocsRenderInterface {
  rend: boolean;
  text: string | undefined;
}
