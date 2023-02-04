/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { Example } from '../models';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExampleUpdateFormInputValues = {
  name?: string;
  description?: string;
};
export declare type ExampleUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExampleUpdateFormOverridesProps = {
  ExampleUpdateFormGrid?: FormProps<GridProps>;
  name?: FormProps<TextFieldProps>;
  description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExampleUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ExampleUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    example?: Example;
    onSubmit?: (
      fields: ExampleUpdateFormInputValues
    ) => ExampleUpdateFormInputValues;
    onSuccess?: (fields: ExampleUpdateFormInputValues) => void;
    onError?: (
      fields: ExampleUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onCancel?: () => void;
    onChange?: (
      fields: ExampleUpdateFormInputValues
    ) => ExampleUpdateFormInputValues;
    onValidate?: ExampleUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExampleUpdateForm(
  props: ExampleUpdateFormProps
): React.ReactElement;
