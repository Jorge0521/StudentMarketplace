import { Context } from '../utils/getContext';

export const Query = {
	user: (_, args, ctx: Context, info) => {
		return ctx.db.query.user({
			where: {
				...args,
			},
		}, info);
	},

	photo: (_, args, ctx: Context, info) => {
		return ctx.db.query.photo({
			where: {
				...args
			}
		}, info);

	}
};
