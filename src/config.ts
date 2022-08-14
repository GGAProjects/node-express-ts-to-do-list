import { Response } from "express";

require("dotenv").config();

export enum HTTPStatus {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZE = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	FIELDS_ERROR = 422,
	INTERNAL = 500,
	NOT_AVAILABLE = 503,
	GATEWAY = 504
}

export const responseSuccess = (response: Response, { data = {}, code = HTTPStatus.OK, message = "" }) => {
	return response.status(code).json({
		statusCode: code,
		message,
		data: {
			...data
		}
	});
}

export const responseError = (response: Response, { code = HTTPStatus.BAD_REQUEST, message = "", errors = {} }) => {
	return response.status(code).json({
		statusCode: code,
		message,
		errors,
	});
}