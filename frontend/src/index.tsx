import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import App from './app/App';


ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme} resetCSS>
			<App/>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
