import { NextFunction, Response } from "express";

export enum HTTPStatus {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZE = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	FIELDS_ERROR = 422,
	TOO_MANY_REQUESTS = 429,
	INTERNAL = 500,
	NOT_AVAILABLE = 503,
	GATEWAY = 504
}

export const setupResponse = (_req, response: Response, next: NextFunction) => {
	response.onSuccess = ({ data = {}, code = HTTPStatus.OK, message = "" }) => {
		return response.status(code).json({
			statusCode: code,
			message,
			data
		})
	}
	response.onError = ({ errors = {}, code = HTTPStatus.BAD_REQUEST, message = "" }) => {
		return response.status(code).json({
			statusCode: code,
			message,
			errors
		})
	}
	next();
};