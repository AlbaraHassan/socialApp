import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "@prisma/client";

export class UserUploadDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}