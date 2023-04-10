import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Option, Options } from './types';

export type MultiComboBoxProps<T extends number | string> = {
  fieldWrapper: FieldWrapperPassThroughProps;
  muiAutoComplete?: Omit<
    AutocompleteProps<Option<T>, true, false, false>,
    'renderInput' | 'options'
  >;
  muiTextField?: TextFieldProps;
  options: Options<T>;
};

export const MultiComboBox = <T extends number | string = number>({
  fieldWrapper,
  muiAutoComplete,
  muiTextField,
  options,
}: MultiComboBoxProps<T>) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <Autocomplete<Option<T>, true, false, false>
        multiple
        filterSelectedOptions
        getOptionLabel={({ label }) => label}
        options={options}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField
            {...params}
            {...muiTextField}
            error={!!fieldWrapper.errorMessage}
          />
        )}
        {...muiAutoComplete}
      />
    </FieldWrapper>
  );
};
