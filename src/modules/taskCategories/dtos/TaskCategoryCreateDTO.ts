import { IsNotEmpty } from "class-validator";

export class TaskCategoryCreateDTO {
	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public category: string
}