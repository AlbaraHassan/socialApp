import { UserService } from './user.service';
import { ChangePasswordDTO, UserRequestDTO } from "./user.dto";
import { User } from "@prisma/client";
import { ConfigService } from "@nestjs/config";
export declare class UserController {
    private readonly userService;
    private readonly config;
    constructor(userService: UserService, config: ConfigService);
    addUser(userData: UserRequestDTO): Promise<User>;
    changePassword(userData: ChangePasswordDTO, req: any): Promise<User>;
    getEnv(): string;
}
