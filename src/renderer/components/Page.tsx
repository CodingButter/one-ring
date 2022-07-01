import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './common/ResponsiveAppBar';

interface Props extends React.PropsWithChildren<{}> {
  pending: boolean;
}

const Page = ({ children, pending }: Props) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyItems="start"
      sx={{ widgth: '100%', height: '100vh' }}
      spacing={3}
    >
      <ResponsiveAppBar />
      {pending && (
        <Stack
          sx={{ height: '100%' }}
          direction="column"
          alignItems="center"
          justifyItems="center"
        >
          <CircularProgress />
        </Stack>
      )}
      {children}
    </Stack>
  );
};
export default Page;
