import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Chakra UI import
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//Font Import
import '@fontsource/poppins'

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

