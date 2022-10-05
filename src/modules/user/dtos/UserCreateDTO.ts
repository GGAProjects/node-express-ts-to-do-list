import { IsEmail, IsNotEmpty } from "class-validator";

export class UserCreateDTO {
	@IsEmail()
	public email: string

	@IsNotEmpty()
	public name: string

	@IsNotEmpty()
	public documentId: string

	@IsNotEmpty({ message: "Contraseña es obligatoria" })
	public password: string
}