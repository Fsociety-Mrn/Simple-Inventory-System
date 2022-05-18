import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#434343',
    },
    secondary: {
      main: '#000000',
    },
    text:{
      disabled: '#000000'
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


