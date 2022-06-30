import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: ['Roboto', 'Inter', 'sans-serif'].join(','),
    fontWeightBold: 400,
    fontWeightLight: 400,
    fontWeightRegular: 400,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#4F4946',
    },
    secondary: {
      main: '#C3AF6A',
    },
    background: {
      default: '#2A2522',
      paper: '#453B34',
    },
    error: {
      main: '#966d1d',
    },
    warning: {
      main: '#ff941f',
    },
    info: {
      main: '#90caf9',
    },
  },
  props: {
    MuiAppBar: {
      color: 'secondary',
    },
  },
  shape: {
    borderRadius: 4,
  },
});
