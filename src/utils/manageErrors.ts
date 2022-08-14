
import { HTTPStatus, responseError } from "@src/config";
import { makeValidateBody } from "express-class-validator";

export const formatErrors = (data, _request, response) => {
	const fields = data.map((item) => {
		return {
			field: item.property,
			messages: Object.values(item.constraints)
		}
	})
	return responseError(response, {
		errors: fields,
		code: HTTPStatus.FIELDS_ERROR,
		message: "Check your fields"
	})
}

export const manageErrors = (dtoValidation) => {
	return makeValidateBody(dtoValidation, undefined, formatErrors);
};

