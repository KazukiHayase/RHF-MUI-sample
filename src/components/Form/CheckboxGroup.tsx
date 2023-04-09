import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

export type CheckboxGroupProps = {
  fieldWrapper: FieldWrapperPassThroughProps;
  muiCheckbox?: CheckboxProps;
  options: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }[];
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  fieldWrapper,
  muiCheckbox,
  options,
}) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <FormGroup row>
        {options.map(({ label, checked, onChange }) => (
          <FormControlLabel
            key={label}
            label={label}
            control={
              <Checkbox
                size="small"
                checked={checked}
                onChange={onChange}
                {...muiCheckbox}
              />
            }
          />
        ))}
      </FormGroup>
    </FieldWrapper>
  );
};
