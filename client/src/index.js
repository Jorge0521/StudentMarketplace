import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo-client';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from './ constants';

import './styles.css';

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem(AUTH_TOKEN);
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ApolloProvider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
