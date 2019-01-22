import { ApolloServer } from 'apollo-server';
import { schema } from './resolvers';
import { Prisma } from './generated/prisma';

const db = new Prisma({
	endpoint: process.env.PRISMA_ENDPOINT!,
	secret: process.env.PRISMA_SECRET!,
	debug: true,
});

const server = new ApolloServer({
	schema,
	context: req => ({
		...req,
		db,
	}),
	engine: {
		apiKey: 'service:marvelQL:31heDXzZ0JWmMz7L4zCuug',
	},
});
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
