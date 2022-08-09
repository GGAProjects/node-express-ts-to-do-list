import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (data: any) => {
	const model = await prisma.taskGroup.create({
		data: {
			...data,
		},
	})
	return model;
}

export const getList = async () => {
	return prisma.taskGroup.findMany();
}