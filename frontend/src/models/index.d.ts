import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerExample = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Example, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExample = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Example, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Example = LazyLoading extends LazyLoadingDisabled ? EagerExample : LazyExample

export declare const Example: (new (init: ModelInit<Example>) => Example) & {
  copyOf(source: Example, mutator: (draft: MutableModel<Example>) => MutableModel<Example> | void): Example;
}