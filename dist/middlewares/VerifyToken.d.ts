import { NextFunction, Request, Response } from "express";
interface CustomRequest extends Request {
    user?: any;
}
declare const verifyToken: (request: CustomRequest, response: Response, next: NextFunction) => any;
export { verifyToken, CustomRequest };
