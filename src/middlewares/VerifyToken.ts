import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import * as UserService from "@modules/user/services/UserService";

interface CustomRequest extends Request {
	user?: any;
};

const verifyToken = (request: CustomRequest, response: Response, next: NextFunction): any => {
	const authHeader = request.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return response.sendStatus(401);

	jwt.verify(token, process.env.SECRET as string, async (err: any, user: any) => {
		if (err) return response.sendStatus(403);
		request.user = await UserService.findById(user.id);
		return next();
	})
}

export { verifyToken, CustomRequest }