import { Context } from '../utils/getContext';

export const Mutation = {
	createUser: (_, args, ctx: Context, info) => {
		return ctx.db.mutation.createUser({
			data: args.data,
		}, info);
	},

	createItem: (_, args, ctx: Context, info) => {
		return ctx.db.mutation.createItem({
			data: args.data,
		}, info);
	},
    
};

