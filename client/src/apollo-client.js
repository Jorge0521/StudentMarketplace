import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL
});

export default client;
