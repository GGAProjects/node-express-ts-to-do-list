import { db } from "@src/utils/prisma";

export const getList = async () => {
	return db.taskStatus.findMany({ where: {} });
}

export const findByStatus = async (status: string) => {
	return db.taskStatus.findFirst({ where: { status } });
}