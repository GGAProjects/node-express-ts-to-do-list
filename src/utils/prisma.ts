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
	if (params.model == 'TaskGroup' || params.model == 'Task') {
		if (params.action === 'findMany') {
			params.args.where.deletedAt = null

		}
	}
	return next(params)
})

export { db };