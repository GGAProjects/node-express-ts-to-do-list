
import { HTTPStatus } from "@src/config";
import { Response } from "express";
import { makeValidateBody } from "express-class-validator";

export const formatErrors = (data, _request, response: Response) => {
	const fields = data.map((item) => {
		return {
			field: item.property,
			messages: Object.values(item.constraints)
		}
	})
	return response.onError({
		errors: fields,
		code: HTTPStatus.FIELDS_ERROR,
		message: "Check your fields"
	})
}

export const manageErrors = (dtoValidation) => {
	return makeValidateBody(dtoValidation, undefined, formatErrors);
};

