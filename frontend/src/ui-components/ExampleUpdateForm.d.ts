/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Example } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExampleUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type ExampleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExampleUpdateFormOverridesProps = {
    ExampleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExampleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExampleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    example?: Example;
    onSubmit?: (fields: ExampleUpdateFormInputValues) => ExampleUpdateFormInputValues;
    onSuccess?: (fields: ExampleUpdateFormInputValues) => void;
    onError?: (fields: ExampleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExampleUpdateFormInputValues) => ExampleUpdateFormInputValues;
    onValidate?: ExampleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExampleUpdateForm(props: ExampleUpdateFormProps): React.ReactElement;
