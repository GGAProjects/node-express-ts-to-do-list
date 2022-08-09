import { IsNotEmpty } from "class-validator";

export class TaskGroupCreateDTO {
	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public group: string
}