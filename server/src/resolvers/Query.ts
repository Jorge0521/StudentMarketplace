import { Context } from '../utils/getContext';
import { isContext } from 'vm';
import { getUserId } from '../utils/getUser';
const { find, filter } = require('lodash');

export const Query = {
	user: (_, args, ctx: Context, info) => {
		return ctx.db.query.user(
			{
				where: {
					...args,
				},
			},
			info
		);
	},

	photo: (_, args, ctx: Context, info) => {
		return ctx.db.query.photo(
			{
				where: {
					...args,
				},
			},
			info
		);
	},
	items: (_, args, ctx: Context, info) => {
		return ctx.db.query.items(
			{
				where: {
					...args,
				},
			},
			info
		);
	},
	books: (_, args, ctx: Context, info) => {
		return ctx.db.query.books(
			{
				where: {
					...args,
				},
			},
			info
		);
	},
	getLoggedInUser(_, args, ctx: Context, info) {
		const userId = getUserId(ctx);
		console.log('TESTING: ', userId);
		return ctx.db.query.user(
			{
				where: {
					...args,
					id: userId,
				},
			},
			info
		);
	},

	searchSuggestions: async (
		_,
		args,
		ctx: Context,
		info
	): Promise<{ type: string; value: string }[]> => {
		const books = await ctx.db.query.books(args);
		const titles = books.map(book => ({
			type: `TITLE`,
			value: book.title,
		}));
		const authors = books.map(book => ({
			type: `AUTHOR`,
			value: book.author,
		}));
		return [...titles, ...authors];
	},
};
