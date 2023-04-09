import {
  FieldPathByValue,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

import { TextField, TextFieldProps } from './TextField';

type TextFieldControllerProps<TFieldValues extends FieldValues> = {
  registration: UseFormRegisterReturn<FieldPathByValue<TFieldValues, string>>;
  textField: TextFieldProps;
};

export const TextFieldController = <TFieldValues extends FieldValues>({
  registration,
  textField: { fieldWrapper, muiTextField },
}: TextFieldControllerProps<TFieldValues>): JSX.Element => {
  return (
    <TextField
      fieldWrapper={fieldWrapper}
      muiTextField={{
        ...muiTextField,
        ...registration,
      }}
    />
  );
};
