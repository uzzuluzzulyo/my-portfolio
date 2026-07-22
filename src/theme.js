import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C8EEF',
      light: '#9AB2F5',
      dark: '#4A69C9',
      contrastText: '#0D0F14',
    },
    secondary: {
      main: '#EDEEF2',
      contrastText: '#0D0F14',
    },
    accent: {
      main: '#6C8EEF',
      cyan: '#38BDF8',
      contrastText: '#0D0F14',
    },
    background: {
      default: '#0D0F14',
      paper: '#171923',
    },
    text: {
      primary: '#EDEEF2',
      secondary: '#8890A0',
      disabled: '#565D6D',
    },
    divider: 'rgba(237, 238, 242, 0.10)',
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
