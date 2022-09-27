import { NextFunction, Response } from "express";
export declare enum HTTPStatus {
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
export declare const setupResponse: (_req: any, response: Response, next: NextFunction) => void;
