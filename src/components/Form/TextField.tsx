import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

export type TextFieldProps = {
  fieldWrapper: FieldWrapperPassThroughProps;
  muiTextField?: MuiTextFieldProps;
};

export const TextField: React.FC<TextFieldProps> = ({
  fieldWrapper,
  muiTextField,
}) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <MuiTextField {...muiTextField} error={!!fieldWrapper.errorMessage} />
    </FieldWrapper>
  );
};
