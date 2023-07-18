import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/userCreateDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: UserCreateDto): Promise<import(".prisma/client").User>;
    getAll(): Promise<(import(".prisma/client").User & {
        userInfo: import(".prisma/client").UserInfo;
    })[]>;
    get(id: string): Promise<import(".prisma/client").User & {
        userInfo: import(".prisma/client").UserInfo;
    }>;
    update(id: string, data: UserCreateDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<import(".prisma/client").User>;
}
