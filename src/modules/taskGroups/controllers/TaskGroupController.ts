import { Response } from "express";
import { responseError, responseSuccess } from "@src/config";
import { CustomRequest } from "@interfaces/RoutesInterfaces";
import * as TaskGroupService from "../services/TaskGroupService";

export const create = async (request: CustomRequest, response: Response) => {
	try {
		const data = {
			...request.body,
			authorId: request.user.id
		}
		const taskGroup = await TaskGroupService.create(data);
		return responseSuccess(response, { data: { taskGroup } });
	} catch (error) {
		return responseError(response, { message: error.message })
	}
};

export const read = async (request: CustomRequest, response: Response) => {
	try {
		const taskGroup = await TaskGroupService.read(request.params.id);
		return responseSuccess(response, { data: { taskGroup } });
	} catch (error) {
		return responseError(response, { message: error.message })
	}
};

export const update = async (request: CustomRequest, response: Response) => {
	try {
		const data = {
			...request.body,
			id: request.params.id,
			authorId: request.user.id
		}
		const taskGroup = await TaskGroupService.update(data);
		return responseSuccess(response, { data: { taskGroup } });
	} catch (error) {
		return responseError(response, { message: error.message })
	}
};

export const list = async (request: CustomRequest, response: Response) => {
	try {
		const taskGroups = await TaskGroupService.list(request.user.id);
		return responseSuccess(response, { data: { taskGroups } });
	} catch (error) {
		return responseError(response, { message: error.message })
	}
};

export const destroy = async (request: CustomRequest, response: Response) => {
	try {
		const taskGroup = await TaskGroupService.destroy(request.params.id);
		return responseSuccess(response, { data: { taskGroup } });
	} catch (error) {
		return responseError(response, { message: error.message })
	}
};
