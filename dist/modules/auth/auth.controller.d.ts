import { AuthService } from "./auth.service";
import { UserCreateDto } from "../user/dto/userCreate.dto";
import { AuthDto } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: UserCreateDto): Promise<import(".prisma/client").User>;
    login(data: AuthDto): Promise<{
        accessToken: string;
    }>;
}
