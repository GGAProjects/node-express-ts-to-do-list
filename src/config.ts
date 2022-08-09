import { NextFunction, Request, Response } from "express";

require("dotenv").config();

export enum HTTPStatus {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZE = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL = 500,
	NOT_AVAILABLE = 503,
	GATEWAY = 504
}

export const responseSuccess = (response: Response, { data = {}, code = HTTPStatus.OK, message = "" }) => {
	return response.status(HTTPStatus.OK).json({
		statusCode: code,
		message,
		data: {
			...data
		}
	});
}

export const responseError = (response: Response, { data = {}, code = HTTPStatus.BAD_REQUEST, message = "", errors = {} }) => {
	return response.status(HTTPStatus.OK).json({
		statusCode: code,
		message,
		errors,
		data: {
			...data
		}
	});
}

export const setupResponse = (_req: Request, _response: Response, next: NextFunction) => {

	// Object.defineProperty(response, "success", ({ result = {}, code = HTTPStatus.OK, message = "" }) => {
	// 	return response.json({
	// 		result, code, message
	// 	})
	// });

	// response.success = ({ result = {}, code = HTTPStatus.OK, message = "" }) => {
	// 	return response.json({
	// 		result, code, message
	// 	})
	// }

	// response.error = ({ errors = {}, code = HTTPStatus.BAD_REQUEST, message = "", result = {} }) => {
	// 	return response.status(code).json({
	// 		errors, code, message, result
	// 	})
	// }

	// response.badreq = ({ errors = {}, code = HTTPStatus.BAD_REQUEST, message = "", result = {} }) => {
	// 	return response.status(code).error({ errors, code, message, result })
	// }

	// response.forbidden = ({ errors = {}, code = HTTPStatus.FORBIDDEN, message = "", result = {} }) => {
	// 	return response.status(code).error({ errors, code, message, result })
	// }

	// response.unauth = ({ errors = {}, code = HTTPStatus.UNAUTHORIZE, message = "", result = {} }) => {
	// 	return response.status(code).error({ errors, code, message, result })
	// }

	// response.internal = ({ errors = {}, code = HTTPStatus.INTERNAL, message = "", result = {} }) => {
	// 	return response.status(code).error({ errors, code, message, result })
	// }

	next();
}
