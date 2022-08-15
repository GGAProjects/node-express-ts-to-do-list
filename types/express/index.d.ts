interface BaseParams {
	code?: number,
	data?: any,
	errors?: any,
	message?: string,
}

declare namespace Express {
	interface Request {
		user?: any;
	}
	interface Response {
		onSuccess: (params: BaseParams) => Response;
		onError: (params: BaseParams) => Response;
	}
}