import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getList = async () => {
	return prisma.taskStatus.findMany();
}