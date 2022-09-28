import { Request, Response } from "express";
import { generateToken } from "@utils/token";
import * as UserService from "../services/UserService";
import { FieldsError } from "@src/utils/customErrors";

export const register = async (request: Request, response: Response) => {
	return response.onSuccess({
		data: request.body
	});
	try {
		const user = await UserService.register(request.body);
		const token = generateToken(user);

		return response.onSuccess({
			data: { token }
		});

	} catch (error) {
		if (error instanceof FieldsError) {
			return response.onError({ message: error.message, errors: error.fields, code: error.status });
		} else {
			return response.onError({ message: `Register error: ${error.message}` })
		}
	}
};

export const login = async (request: Request, response: Response) => {
	return response.onSuccess({
		data: request.body
	});
	try {
		const user = await UserService.login(request.body.email, request.body.password);
		const token = generateToken(user);
		return response.onSuccess({
			data: { token }
		});
	} catch (error) {
		if (error instanceof FieldsError) {
			return response.onError({ message: error.message, errors: error.fields, code: error.status });
		} else {
			return response.onError({ message: `Login error: ${error.message}` })
		}
	}
};