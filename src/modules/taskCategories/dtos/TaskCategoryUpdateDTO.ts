import { IsNotEmpty } from "class-validator";

export class TaskCategoryUpdateDTO {
	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public category: string
}