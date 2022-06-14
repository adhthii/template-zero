import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/comforter/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/cormorant-infant/400.css'
import '@fontsource/courgette/400.css'
import '@fontsource/coustard/400.css'
import theme from './theme'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

    <ChakraProvider theme={theme}>
        <App />
  
    </ChakraProvider>
   
   );
