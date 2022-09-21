import { IsNotEmpty, IsOptional, IsISO8601 } from "class-validator";

export class TaskUpdateDTO {
	@IsNotEmpty({ message: "El estado es obligatorio" })
	public taskStatusId: string

	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public taskCategoryId: string

	@IsNotEmpty({ message: "La tarea es obligatoria" })
	public task: string

	@IsOptional()
	public description: string

	@IsISO8601()
	public expectedDate: string
}