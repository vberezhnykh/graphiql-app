import { FormInput } from 'utils/interfaces';

export {};

export type TTab = {
  id: string | number;
  label?: string | number;
};

export type TVariablesInput = {
  [key: string]: string;
};

export type IdeFormProps = {
  sendRequest: (requestBody: FormInput) => void;
};
