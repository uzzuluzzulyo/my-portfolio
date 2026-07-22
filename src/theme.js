import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2F6FE4',
      light: '#6E9CF2',
      dark: '#1D4FBF',
      contrastText: '#FBFAF4',
    },
    secondary: {
      main: '#0A0A0C',
      contrastText: '#FBFAF4',
    },
    accent: {
      main: '#2F6FE4',
      lime: '#D8FF3E',
      contrastText: '#FBFAF4',
    },
    sky: {
      main: '#CFE4F5',
    },
    ink: {
      main: '#0A0A0C',
      contrastText: '#FBFAF4',
    },
    background: {
      default: '#FBFAF4',
      paper: '#F2F0E8',
    },
    text: {
      primary: '#0A0A0C',
      secondary: '#5B6270',
      disabled: '#9AA0AC',
    },
    divider: 'rgba(10, 10, 12, 0.14)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontFamilyMono: '"JetBrains Mono", "Roboto Mono", monospace',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
      letterSpacing: '-0.03em',
    },
    overline: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontWeight: 500,
      letterSpacing: '0.1em',
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

export default theme;
