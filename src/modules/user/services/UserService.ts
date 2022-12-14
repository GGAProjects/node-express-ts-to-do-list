import { PrismaClient } from "@prisma/client";
import { FieldsError } from "@src/utils/customErrors";
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

	if (!user) throw new FieldsError("Wrong email or password", {
		email: ["Wrong email or password",]
	});

	const checkPassword = await bcrypt.compare(password, user.password);

	if (!checkPassword) throw new FieldsError("Wrong email or password", {
		email: ["Wrong email or password",]
	});

	return user;
}

const findById = async (id: string) => {
	const model = await prisma.user.findFirst({ where: { id } });
	return model;
}

const findByEmail = async (email: string) => {
	const model = await prisma.user.findFirst({ where: { email } });
	return model;
}

export { register, login, findById }