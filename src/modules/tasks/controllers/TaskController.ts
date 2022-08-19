import { Response } from "express";
import { CustomRequest } from "@middlewares/VerifyToken";
import * as TaskStatusService from "../services/TaskStatusService";
import * as TaskGroupService from "@modules/taskGroups/services/TaskGroupService";
import * as TaskService from "../services/TaskService";

export const getDataForCreating = async (request: CustomRequest, response) => {
	try {
		const taskStatuses = await TaskStatusService.getList();
		const taskGroups = await TaskGroupService.list(request.user.id);
		return response.onSuccess({ data: { taskStatuses, taskGroups } });
	} catch (error) {
		return response.onError({ message: `Task getDataForCreating action: ${error.message}` })
	}
}

export const create = async (request: CustomRequest, response: Response) => {
	try {
		const data = {
			...request.body,
			authorId: request.user.id
		}
		const task = await TaskService.create(data);
		return response.onSuccess({ data: { task } });
	} catch (error) {
		return response.onError({ message: `Task create action: ${error.message}` })
	}
};

export const read = async (request: CustomRequest, response: Response) => {
	try {
		const task = await TaskService.read(request.params.id);
		return response.onSuccess({ data: { task } });
	} catch (error) {
		return response.onError({ message: `Task read action: ${error.message}` })
	}
};

export const update = async (request: CustomRequest, response: Response) => {
	try {
		const data = {
			...request.body,
			id: request.params.id,
			authorId: request.user.id
		}
		const task = await TaskService.update(data);
		return response.onSuccess({ data: { task } });
	} catch (error) {
		return response.onError({ message: `Task update action: ${error.message}` })
	}
};

export const list = async (request: CustomRequest, response: Response) => {
	try {
		const tasks = await TaskService.list(request.user.id);
		return response.onSuccess({ data: { tasks } });
	} catch (error) {
		return response.onError({ message: `Task list action: ${error.message}` })
	}
};

export const destroy = async (request: CustomRequest, response: Response) => {
	try {
		const task = await TaskService.destroy(request.params.id);
		return response.onSuccess({ data: { task } });
	} catch (error) {
		return response.onError({ message: `Task destroy action: ${error.message}` })
	}
};