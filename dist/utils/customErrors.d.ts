import { HTTPStatus } from "@src/config";
export declare class FieldsError extends Error {
    fields: {};
    status: HTTPStatus;
    constructor(message: any, fields: any);
}
