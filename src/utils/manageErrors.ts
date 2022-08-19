
import { HTTPStatus } from "@src/config";
import { Response } from "express";
import { makeValidateBody } from "express-class-validator";

export const formatErrors = (data: Array<any>, _request, response: Response) => {
	const fields = data.reduce((fields, currentItem) => {
		fields[currentItem.property] = Object.values(currentItem.constraints)
		return fields;
	}, {})

	return response.onError({
		errors: fields,
		code: HTTPStatus.FIELDS_ERROR,
		message: "Check your fields"
	})
}

export const manageErrors = (dtoValidation) => {
	return makeValidateBody(dtoValidation, undefined, formatErrors);
};

