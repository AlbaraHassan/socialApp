import { PrismaService } from "../../core/prisma/prisma.service";
import { UserCreateDto } from "./dto/userCreate.dto";
import { UserUploadDto } from "./dto/userUpdate.dto";
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
    getByEmail(email: string): Promise<import(".prisma/client").User>;
    update({ id, firstName, lastName, ...data }: UserUploadDto): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<import(".prisma/client").User>;
}
