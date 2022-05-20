import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
const theme = createTheme({
  palette: {
    primary: {
      main: '#434343',
    },
    secondary: {
      main: '#FAEBCD',
    },
    info: {
      main: '#F7C873',
    },
    text:{
      disabled: '#000000',
    }
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


