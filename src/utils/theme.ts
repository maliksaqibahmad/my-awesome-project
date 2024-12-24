import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Modern green for your "Quaid Majlis" vibe
    },
    secondary: {
      main: '#ff5722', // Vibrant orange
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;