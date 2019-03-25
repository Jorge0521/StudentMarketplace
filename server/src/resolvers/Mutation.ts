import { Context } from '../utils/getContext';
import { getUserId } from '../utils/getUser';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const Mutation = {
	createUser: async (_, args, ctx: Context, info) => {
		return ctx.db.mutation.createUser(
			{
				data: {
					...args.data,
					password: await bcrypt.hash(args.data.password, 10),
				},
			},
			info
		);
	},

	createItem: (_, args, ctx: Context, info) => {
		const userId = getUserId(ctx);
		console.log('TESTING: ', userId);
		return ctx.db.mutation.createItem(
			{
				data: {
					...args.data,
					user: {
						connect: {
							id: userId,
						},
					},
				},
			},
			info
		);
	},

	async signup(_, args, ctx, info) {
		const user = await ctx.db.mutation.createUser({
			data: {
				...args.data,
				password: await bcrypt.hash(args.data.password, 10),
			},
		});
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

		return {
			token,
			user,
			info,
		};
	},

	async login(_, args, ctx: Context, info) {
		const user = await ctx.db.query.user({ where: { email: args.email } });
		if (!user) {
			throw new Error('No such user found');
		}
		const valid = await bcrypt.compare(args.password, user.password);
		if (!valid) {
			throw new Error(
				'Invalid pass' + ' ' + user.password + ' ' + args.password
			);
		}

		return {
			token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
			user,
		};
	},
};
