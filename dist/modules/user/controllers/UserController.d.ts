/// <reference types="express-serve-static-core" />
import { Request, Response } from "express";
export declare const register: (request: Request, response: Response) => Promise<Express.Response>;
export declare const login: (request: Request, response: Response) => Promise<Express.Response>;
