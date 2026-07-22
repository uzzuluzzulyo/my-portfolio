import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5B8DEF',
      light: '#8FB4F6',
      dark: '#3C6FD1',
      contrastText: '#0A0A0C',
    },
    secondary: {
      main: '#F4F3EE',
      contrastText: '#0A0A0C',
    },
    accent: {
      main: '#5B8DEF',
      lime: '#D8FF3E',
      contrastText: '#0A0A0C',
    },
    background: {
      default: '#0A0A0C',
      paper: '#141519',
    },
    text: {
      primary: '#F4F3EE',
      secondary: '#9BA0AC',
      disabled: '#5B6270',
    },
    divider: 'rgba(244, 243, 238, 0.12)',
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
