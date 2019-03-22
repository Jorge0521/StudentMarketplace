import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from './ constants';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './styles.css';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem(AUTH_TOKEN);
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL,
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
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
