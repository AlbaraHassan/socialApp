import { UserCreateDto } from "../user/dto/userCreate.dto";
import { JwtHelper } from "../../core/helpers/jwtHelper";
import { AppConfigService } from "../../core/config/appConfig.service";
import { UserService } from "../user/user.service";
import { AuthDto } from "./dto/auth.dto";
export declare class AuthService {
    private readonly userService;
    private readonly jwt;
    private readonly config;
    constructor(userService: UserService, jwt: JwtHelper, config: AppConfigService);
    register({ password, ...data }: UserCreateDto): Promise<import(".prisma/client").User>;
    login({ email, password }: AuthDto): Promise<{
        accessToken: string;
    }>;
}
