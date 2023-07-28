import { IsEnum, IsString } from "class-validator";
import { Role } from "@prisma/client";

export class UserCreateDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}