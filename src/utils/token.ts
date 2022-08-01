import jwt from "jsonwebtoken";

const secret: any = process.env.SECRET;
const tokenLife = process.env.TOKENLIFE;

const generateToken = (data: any) => {
	const token = jwt.sign({ id: data.id }, secret, { expiresIn: tokenLife })
	return token;
}

export { generateToken }