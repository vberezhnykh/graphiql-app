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

export interface SchemaResponseInterface {
  data: Data;
}

export interface Data {
  __schema: Schema;
}

export interface Schema {
  queryType: QueryType;
  mutationType: null;
  types: Type[];
  directives: Direc[];
}

export interface QueryType {
  name: string;
}

export interface Type {
  kind: string;
  name: string;
  fields?: Field[];
  inputFields?: InputField[];
  interfaces?: null | [];
  enumValues?: EnumValue[];
  possibleTypes: null;
}

export interface Field {
  name: string;
  args: Arg[];
  type: Type3;
  isDeprecated: boolean;
  deprecationReason: null;
}

export interface Arg {
  name: string;
  type: Type2;
  defaultValue?: null | string;
}

export interface Type2 {
  kind: string;
  name?: string;
  ofType?: OfType;
}

export interface OfType {
  kind: string;
  name?: string;
  ofType?: OfType2;
}

export interface OfType2 {
  kind: string;
  name: null | string;
  ofType: OfType3;
}

export interface OfType3 {
  kind: string;
  name: string;
  ofType: null;
}

export interface Type3 {
  kind: string;
  name?: string;
  ofType?: OfType4;
}

export interface OfType4 {
  kind: string;
  name?: string;
  ofType?: OfType5;
}

export interface OfType5 {
  kind: string;
  name?: string;
  ofType?: OfType6;
}

export interface OfType6 {
  kind: string;
  name: string;
  ofType: null;
}

export interface InputField {
  name: string;
  type: Type4;
  defaultValue: null | string;
}

export interface Type4 {
  kind: string;
  name: string;
  ofType: null;
}

export interface EnumValue {
  name: string;
  isDeprecated: boolean;
  deprecationReason: null;
}

export interface Direc {
  name: string;
  locations: string[];
  args: Arg2[];
}

export interface Arg2 {
  name: string;
  type: Type5;
  defaultValue?: null | string;
}

export interface Type5 {
  kind: string;
  name?: string;
  ofType?: OfType7;
}

export interface OfType7 {
  kind: string;
  name: string;
  ofType: null;
}
