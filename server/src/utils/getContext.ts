import { Prisma } from '../generated/prisma';
const db = new Prisma({
	endpoint: process.env.PRISMA_ENDPOINT!,
	secret: process.env.PRISMA_SECRET!,
	debug: true,
});
export interface Context {
	db: Prisma;
	request: any;
}

export default (req): Context => ({
	request: req,
	db,
});
