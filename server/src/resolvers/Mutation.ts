import { Context } from '../utils/getContext';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const Mutation = {
	createUser: (_, args, ctx: Context, info) => {
		return ctx.db.mutation.createUser(
			{
				data: args.data,
			},
			info
		);
	},

	createItem: (_, args, ctx: Context, info) => {
		return ctx.db.mutation.createItem(
			{
				data: args.data,
			},
			info
		);
	},

	async signup(_, args, ctx, info) {
		// const password = await bcrypt.hash(args.password, 10);
		const user = await ctx.db.mutation.createUser({ data: args.data });
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

		return {
			token,
			user,
			info,
		};
	},

	async login(parent, args, ctx) {
		const user = await ctx.db.mutation.user({ email: args.email });
		if (!user) {
			throw new Error('No such user found');
		}

		const valid = await bcrypt.compare(args.password, user.password);
		if (!valid) {
			throw new Error('Invalid password');
		}

		return {
			token: jwt.sign({ userId: user.id }, process.env.PRISMA_SECRET),
			user,
		};
	},
};
