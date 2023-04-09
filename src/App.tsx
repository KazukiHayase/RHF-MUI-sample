import Box from '@mui/material/Box/Box';
import { useForm } from 'react-hook-form';
import { TextFieldController } from './components/Form/TextFieldController';

type Form = {
  textField: string;
};

function App() {
  const {
    register,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      textField: '',
    },
  });

  return (
    <Box sx={{ width: 400 }}>
      <TextFieldController<Form>
        registration={register('textField')}
        textField={{
          fieldWrapper: {
            label: 'TextField',
            errorMessage: errors.textField?.message,
          },
        }}
      />
    </Box>
  );
}

export default App;
