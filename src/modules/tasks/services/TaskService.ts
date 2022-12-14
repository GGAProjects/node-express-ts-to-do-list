import { db } from "@src/utils/prisma";

export const create = async (data: any) => {
	const model = await db.task.create({
		data: {
			...data,
		},
	})
	return model;
}

export const read = async (id: string) => {
	const model = await db.task.findFirst({
		where: {
			id
		}
	})
	return model;
}

export const update = async (data: any) => {
	const model = await db.task.upsert({
		where: {
			id: data.id,
		},
		update: {
			...data
		},
		create: {
			...data
		},
	})
	return model;
}

export const updateModel = async (data: any) => {
	const model = await db.task.update({
		where: {
			id: data.id,
		},
		data: {
			...data
		}
	})
	return model;
}

export const list = async (authorId: string, filters = {}) => {
	return db.task.findMany({
		where: {
			authorId,
			...filters
		},
		include: {
			status: true
		}
	});
}

export const destroy = async (id: string) => {
	const model = await db.task.update({
		where: {
			id,

		},
		data: {
			deletedAt: new Date()
		}
	})

	return model;
}