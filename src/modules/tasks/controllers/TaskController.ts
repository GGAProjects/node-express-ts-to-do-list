import { Response } from "express";
import { CustomRequest } from "@middlewares/VerifyToken";
import * as TaskStatusService from "../services/TaskStatusService";
import * as TaskGroupService from "../services/TaskGroupService";
import * as TaskService from "../services/TaskService";

export const getDataForCreating = async (_, response) => {
	try {
		const statuses = await TaskStatusService.getList();
		const groups = await TaskGroupService.getList();
		return response.status(200).send({
			status: "SUCCESS",
			data: {
				statuses,
				groups
			}
		});
	} catch (error) {
		return response.status(500).send({
			status: "ERROR",
			message: error.message
		});
	}
}

export const create = async (request: CustomRequest, response: Response) => {
	const data = {
		...request.body,
		authorId: request.user.id
	}
	const task = await TaskService.create(data);

	return response.status(200).send({
		status: "SUCCESS",
		data: {
			task
		}
	});
};

export const list = async (request: CustomRequest, response: Response) => {
	const tasks = await TaskService.list(request.user.id);

	return response.status(200).send({
		status: "SUCCESS",
		data: {
			tasks
		}
	});
};

