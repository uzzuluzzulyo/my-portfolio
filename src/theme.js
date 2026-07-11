import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4FA3',
      light: '#FF8FC5',
      dark: '#E6297D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1B2A4A',
      dark: '#121E36',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#3ED6C5',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#767676',
      disabled: '#A0A0A0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
