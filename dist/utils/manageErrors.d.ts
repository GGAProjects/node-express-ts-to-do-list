/// <reference types="express-serve-static-core" />
import { Response } from "express";
export declare const formatErrors: (data: Array<any>, _request: any, response: Response) => Express.Response;
export declare const manageErrors: (dtoValidation: any) => (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
