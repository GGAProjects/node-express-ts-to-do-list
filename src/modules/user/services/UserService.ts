import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const register = async (data: any) => {
	data.password = bcrypt.hashSync(data.password, 10);
	const model = await prisma.user.create({
		data: {
			...data,
		},
	})

	return model;
}

const login = async (email: string, password: string) => {
	const user = await findByEmail(email);

	if (!user) throw new Error("Wrong email or password");

	const checkPassword = await bcrypt.compare(password, user.password);

	if (!checkPassword) throw new Error("Wrong email or password");

	return user;
}

const findById = async (id: number) => {
	const model = await prisma.user.findFirst({ where: { id } });
	return model;
}

const findByEmail = async (email: string) => {
	const model = await prisma.user.findFirst({ where: { email } });
	return model;
}

export { register, login, findById }