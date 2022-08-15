import { Request, Response } from "express";
import * as TaskGroupService from "../services/TaskGroupService";

export const create = async (request: Request, response: Response) => {
	try {
		const data = {
			...request.body,
			authorId: request.user.id
		}
		const taskGroup = await TaskGroupService.create(data);
		return response.onSuccess({ data: { taskGroup } });
	} catch (error) {
		return response.onError({ message: `Task group create action: ${error.message}` })
	}
};

export const read = async (request: Request, response: Response) => {
	try {
		const taskGroup = await TaskGroupService.read(request.params.id);
		return response.onSuccess({ data: { taskGroup } });
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
		const taskGroup = await TaskGroupService.update(data);
		return response.onSuccess({ data: { taskGroup } });
	} catch (error) {
		return response.onError({ message: `Task group update action: ${error.message}` })
	}
};

export const list = async (request: Request, response: Response) => {
	try {
		const taskGroups = await TaskGroupService.list(request.user.id);
		return response.onSuccess({ data: { taskGroups } });
	} catch (error) {
		return response.onError({ message: `Task group list action: ${error.message}` })
	}
};

export const destroy = async (request: Request, response: Response) => {
	try {
		const taskGroup = await TaskGroupService.destroy(request.params.id);
		return response.onSuccess({ data: { taskGroup } });
	} catch (error) {
		return response.onError({ message: `Task group destroy action: ${error.message}` })
	}
};