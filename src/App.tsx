import { FC } from 'react';
import { Toaster, toast } from 'sonner';
import { Box, Button } from '@mui/material';
// ...
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const handlePromise = () => {
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        return `toast has been added`;
      },
      error: 'Error',
    });
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', width: '25%', rowGap: 1 }}
    >
      <Toaster position="top-right" richColors />
      <Button onClick={() => toast('My first toast')} variant={'contained'}>
        default
      </Button>
      <Button
        onClick={() =>
          toast.message('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
        variant={'contained'}
      >
        Message
      </Button>
      <Button
        onClick={() => toast.success('Event has been created')}
        variant={'contained'}
        color={'success'}
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.info('Be at the area 10 minutes before the event time')
        }
        variant={'contained'}
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.warning('Event start time cannot be earlier than 8am')
        }
        variant={'contained'}
        color={'warning'}
      >
        Warning
      </Button>
      <Button
        variant={'contained'}
        onClick={() => toast.error('Event has not been created')}
        color={'error'}
      >
        Error
      </Button>
      <Button
        variant={'contained'}
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Undo Action
      </Button>
      <Button variant={'contained'} onClick={() => handlePromise()}>
        Promise
      </Button>
      <Button
        variant={'contained'}
        onClick={() => toast(<div>A custom toast with default styling</div>)}
      >
        Custom Toast
      </Button>
    </Box>
  );
};
