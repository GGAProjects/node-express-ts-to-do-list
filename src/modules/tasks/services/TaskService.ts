import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (data: any) => {
	const model = await prisma.task.create({
		data: {
			...data,
		},
	})
	return model;
}

export const list = async (authorId: string) => {
	const records = await prisma.task.findMany({
		where: {
			authorId
		}
	})
	return records;
}