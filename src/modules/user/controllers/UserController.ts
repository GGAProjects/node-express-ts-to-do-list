import { Request, Response } from "express";
import { generateToken } from "@utils/token";
import * as UserService from "../services/UserService";

export const register = async (request: Request, response: Response) => {
	try {
		const user = await UserService.register(request.body);
		const token = generateToken(user);

		return response.onSuccess({
			data: token
		});

	} catch (error) {
		return response.onError({ message: `Register error: ${error.message}` })
	}
};

export const login = async (request: Request, response: Response) => {
	try {
		const user = await UserService.login(request.body.email, request.body.password);
		const token = generateToken(user);
		return response.onSuccess({
			data: token
		});
	} catch (error) {
		return response.onError({ message: `Login error: ${error.message}` })
	}
};