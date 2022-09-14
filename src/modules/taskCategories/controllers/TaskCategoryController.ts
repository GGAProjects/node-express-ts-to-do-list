import { Request, Response } from "express";
import * as TaskCategoryService from "../services/TaskCategoryService";

export const create = async (request: Request, response: Response) => {
	try {
		const data = {
			...request.body,
			authorId: request.user.id
		}
		const taskCategory = await TaskCategoryService.create(data);
		return response.onSuccess({ data: { taskCategory } });
	} catch (error) {
		return response.onError({ message: `Task group create action: ${error.message}` })
	}
};

export const read = async (request: Request, response: Response) => {
	try {
		const taskCategory = await TaskCategoryService.read(request.params.id);
		return response.onSuccess({ data: { taskCategory } });
	} catch (error) {
		return response.onError({ message: `Task group read action: ${error.message}` })
	}
};

export const update = async (request: Request, response: Response) => {
	try {
		const data = {
			...request.body,
			id: request.params.id,
			authorId: request.user.id
		}
		const taskCategory = await TaskCategoryService.update(data);
		return response.onSuccess({ data: { taskCategory } });
	} catch (error) {
		return response.onError({ message: `Task group update action: ${error.message}` })
	}
};

export const list = async (request: Request, response: Response) => {
	try {
		const taskCategories = await TaskCategoryService.list(request.user.id);
		return response.onSuccess({ data: { taskCategories } });
	} catch (error) {
		return response.onError({ message: `Task group list action: ${error.message}` })
	}
};

export const destroy = async (request: Request, response: Response) => {
	try {
		const taskCategory = await TaskCategoryService.destroy(request.params.id);
		return response.onSuccess({ data: { taskCategory } });
	} catch (error) {
		return response.onError({ message: `Task group destroy action: ${error.message}` })
	}
};