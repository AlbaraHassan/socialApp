import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/userCreateDto";
import { UserUploadDto } from "./dto/userUpdateDto";
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
    update(data: UserUploadDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<import(".prisma/client").User>;
}
