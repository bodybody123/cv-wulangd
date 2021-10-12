import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './page';
import reportWebVitals from './reportWebVitals';
import { NoSsr } from '@mui/core';
import { CssBaseline } from '@mui/material';
import { ThemeProvider }from '@mui/material/styles';
import theme from 'themes/MuiTheme';

ReactDOM.render(
  <React.StrictMode> 
    <CssBaseline />
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </NoSsr>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
