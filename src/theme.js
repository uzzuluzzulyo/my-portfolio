import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1F2937',
      light: '#374151',
      dark: '#0F172A',
      contrastText: '#F0F2F5',
    },
    secondary: {
      main: '#1B2A4A',
      dark: '#121E36',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#3ED6C5',
      contrastText: '#0D1321',
    },
    background: {
      default: '#0B1220',
      paper: '#1B2740',
    },
    text: {
      primary: '#F0F2F5',
      secondary: '#9AA5B8',
      disabled: '#5C6B85',
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
