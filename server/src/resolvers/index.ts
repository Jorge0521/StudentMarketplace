import { Query } from './Query';
import { Mutation } from './Mutation';
import { makeExecutableSchema } from 'graphql-tools';
import { extractFragmentReplacements } from 'prisma-binding';
import { FragmentReplacement } from 'graphql-binding';
import { importSchema } from 'graphql-import';
import * as path from 'path';

const resolvers = {
	Query,
	Mutation,
};

export const schema: any = makeExecutableSchema({
	typeDefs: importSchema(path.join(__dirname, '../schema.graphql')),
	resolvers,
	resolverValidationOptions: {
		requireResolversForResolveType: false,
	} as any,
});

export const fragmentReplacements: FragmentReplacement[] = extractFragmentReplacements(
	resolvers
);
