import { IsEmail, IsNotEmpty } from "class-validator";

export class UserLoginDTO {
	@IsEmail()
	public email!: string

	@IsNotEmpty({ message: "Contraseña es obligatoria" })
	public password!: string
}