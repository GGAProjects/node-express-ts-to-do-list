import { PrismaClient } from '@prisma/client'

let db: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	db = new PrismaClient()
} else {
	if (!global.db) {
		global.db = new PrismaClient()
	}
	db = global.db
}

db.$use(async (params, next) => {
	if (params.model == 'TaskCategory' || params.model == 'Task') {
		if (params.action === 'findMany') {
			params.args.where.deletedAt = null

		}
	}
	if (params.model == 'Task') {
		if (params.action === 'findFirst') {
			const result = await next(params);
			if (result.expectedDate) {
				result.expectedDate = result.expectedDate.toISOString().substring(0, 10)
			}
			return result

		}
	}
	return next(params)
})

export { db };