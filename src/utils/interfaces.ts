import { ChangeEventHandler } from 'react';
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
