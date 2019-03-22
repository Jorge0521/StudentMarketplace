import { ApolloServer } from 'apollo-server';
import { schema } from './resolvers';
import getContext from './utils/getContext';

const server = new ApolloServer({
	schema,
	context: getContext,
	engine: {
		apiKey: 'service:marvelQL:31heDXzZ0JWmMz7L4zCuug',
	},
});
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
