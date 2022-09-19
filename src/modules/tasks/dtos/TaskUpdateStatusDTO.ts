import { IsNotEmpty } from "class-validator";

export class TaskUpdateStatusDTO {
	@IsNotEmpty({ message: "El estado es obligatorio" })
	public status: string
}