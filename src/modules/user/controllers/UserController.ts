import { Request, Response } from "express";
import { generateToken } from "@utils/token";
import { CustomRequest } from "@middlewares/VerifyToken";
import * as UserService from "../services/UserService";


const register = async (request: Request, response: Response) => {
	const user = await UserService.register(request.body);
	const token = generateToken(user);

	return response.status(200).send({
		status: "SUCCESS",
		data: {
			token
		}
	});
};

const login = async (request: Request, response: Response) => {
	try {
		const user = await UserService.login(request.body.email, request.body.password);
		const token = generateToken(user);
		return response.status(200).send({
			status: "SUCCESS",
			data: {
				token
			}
		});
	} catch (error) {
		console.log(error.message)
		return response.status(500).send({
			status: "ERROR",
			message: error.message
		});
	}

};

///FOR TESTING PURPOSE -> DELETE AFTER CREATE SIMILAR USEFUL METHOD
const testing = async (request: CustomRequest, response: Response) => {
	return response.status(200).send({
		data: request.user
	});
};

export { login, register, testing }