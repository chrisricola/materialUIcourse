/* eslint-disable no-use-before-define */
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Yerrr
    </ThemeProvider>
  )
}

export default App;