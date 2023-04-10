import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckboxGroupController } from './components/Form/CheckboxGroupController';
import { MultiComboBoxController } from './components/Form/MultiComboBoxController';
import { SelectController } from './components/Form/SelectController';
import { TextFieldController } from './components/Form/TextFieldController';
import { Options } from './components/Form/types';

type Form = {
  textField: string;
  select: number | '';
  checkboxGroup: number[];
  multiComboBox: Options<string>;
};

function App() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      textField: '',
      select: '',
      checkboxGroup: [],
      multiComboBox: [],
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 400 }}>
      <TextFieldController<Form>
        registration={register('textField')}
        textField={{
          fieldWrapper: {
            label: 'TextField',
            errorMessage: errors.textField?.message,
          },
        }}
      />
      <SelectController<Form>
        controller={{
          name: 'select',
          control,
        }}
        select={{
          fieldWrapper: { label: 'Select' },
          muiTextField: undefined,
          options: [
            { label: '選択肢1', value: 1 },
            { label: '選択肢2', value: 2 },
            { label: '選択肢3', value: 3 },
          ],
        }}
      />
      <CheckboxGroupController<Form>
        controller={{
          name: 'checkboxGroup',
          control,
        }}
        checkboxGroup={{
          fieldWrapper: { label: 'CheckboxGroup' },
          options: [
            { label: '選択肢1', value: 1 },
            { label: '選択肢2', value: 2 },
            { label: '選択肢3', value: 3 },
          ],
        }}
      />
      <MultiComboBoxController<Form, string>
        controller={{
          name: 'multiComboBox',
          control,
        }}
        multiComboBox={{
          fieldWrapper: { label: 'MultiComboBox' },
          options: [
            { label: '選択肢1', value: '1' },
            { label: '選択肢2', value: '2' },
            { label: '選択肢3', value: '3' },
          ],
        }}
      />
      <Button
        variant="contained"
        sx={{ width: 100 }}
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
