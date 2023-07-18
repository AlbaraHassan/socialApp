import { PrismaService } from "../../core/prisma/prisma.service";
import { UserCreateDto } from "./dto/userCreateDto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ firstName, lastName, ...data }: UserCreateDto): Promise<import(".prisma/client").User>;
    getAll(): Promise<(import(".prisma/client").User & {
        userInfo: import(".prisma/client").UserInfo;
    })[]>;
    get(id: string): Promise<import(".prisma/client").User & {
        userInfo: import(".prisma/client").UserInfo;
    }>;
    update(id: string, { firstName, lastName, ...data }: UserCreateDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<import(".prisma/client").User>;
}
