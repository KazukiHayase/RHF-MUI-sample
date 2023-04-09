import {
  FieldPathByValue,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { Select, SelectProps } from './Select';

type SelectControllerProps<
  TFieldValues extends FieldValues,
  TValue extends number | string | '',
> = {
  controller: UseControllerProps<
    TFieldValues,
    FieldPathByValue<TFieldValues, TValue>
  >;
  select: SelectProps<TValue>;
};

export const SelectController = <
  TFieldValues extends FieldValues,
  TValue extends number | string | '' = number | '',
>({
  controller,
  select: { fieldWrapper, muiTextField, options },
}: SelectControllerProps<TFieldValues, TValue>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController(controller);

  return (
    <Select
      fieldWrapper={{
        ...fieldWrapper,
        errorMessage: error?.message,
      }}
      muiTextField={{
        ...muiTextField,
        ...field,
      }}
      options={options}
    />
  );
};
