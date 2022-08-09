import { IsNotEmpty } from "class-validator";

export class TaskGroupUpdateDTO {
	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public group: string
}