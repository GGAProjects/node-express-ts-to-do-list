import { HTTPStatus } from "@src/config";

export class FieldsError extends Error {
	fields = {};
	status = HTTPStatus.FIELDS_ERROR;
	constructor(message, fields) {
		super();
		Object.setPrototypeOf(this, FieldsError.prototype);
		Error.captureStackTrace(this, this.constructor);

		this.fields = fields;
		this.message = message;
	}
}