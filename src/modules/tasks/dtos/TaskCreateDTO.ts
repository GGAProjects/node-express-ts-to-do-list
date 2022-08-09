import { IsNotEmpty, IsOptional } from "class-validator";

export class TaskCreateDTO {
	@IsNotEmpty({ message: "El estado es obligatorio" })
	public taskStatusId!: string

	@IsNotEmpty({ message: "El grupo es obligatorio" })
	public taskGroupId!: string

	@IsNotEmpty({ message: "La tarea es obligatoria" })
	public task!: string

	@IsOptional()
	public description!: string
}