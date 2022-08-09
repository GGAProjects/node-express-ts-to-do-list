import { Request, Response } from "express";

export interface CustomRequest extends Request {
	user?: any;
};

// interface BaseParams {
// 	code?: number,
// 	message?: string,
// 	result?: any
// }

// interface ErrorParams extends BaseParams {
// 	errors: any
// }

export interface CustomResponse extends Response {
	// success: (params: BaseParams) => Response<any, Record<string, any>>
	// error: (params: ErrorParams) => Response
	// badreq: (params: ErrorParams) => Response
	// forbidden: (params: ErrorParams) => Response;
	// unauth: (params: ErrorParams) => Response;
	// internal: (params: ErrorParams) => Response;
};