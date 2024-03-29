/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
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
export declare type ExampleCreateFormInputValues = {
  name?: string;
  description?: string;
};
export declare type ExampleCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExampleCreateFormOverridesProps = {
  ExampleCreateFormGrid?: FormProps<GridProps>;
  name?: FormProps<TextFieldProps>;
  description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExampleCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ExampleCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ExampleCreateFormInputValues
    ) => ExampleCreateFormInputValues;
    onSuccess?: (fields: ExampleCreateFormInputValues) => void;
    onError?: (
      fields: ExampleCreateFormInputValues,
      errorMessage: string
    ) => void;
    onCancel?: () => void;
    onChange?: (
      fields: ExampleCreateFormInputValues
    ) => ExampleCreateFormInputValues;
    onValidate?: ExampleCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExampleCreateForm(
  props: ExampleCreateFormProps
): React.ReactElement;
