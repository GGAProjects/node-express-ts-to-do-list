/// <reference types="express-serve-static-core" />
import { Request, Response } from "express";
export declare const create: (request: Request, response: Response) => Promise<Express.Response>;
export declare const read: (request: Request, response: Response) => Promise<Express.Response>;
export declare const update: (request: Request, response: Response) => Promise<Express.Response>;
export declare const list: (request: Request, response: Response) => Promise<Express.Response>;
export declare const destroy: (request: Request, response: Response) => Promise<Express.Response>;
