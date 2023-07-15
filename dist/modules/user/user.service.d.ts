import { ChangePasswordDTO, UserDTO } from "./user.dto";
import { PrismaService } from '../../core/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserInfoDTO } from "./userInfo.dto";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneUser(email: string): Promise<User>;
    addUser(data: {
        user: UserDTO;
        info: UserInfoDTO;
    }): Promise<User>;
    changePassword(data: ChangePasswordDTO): Promise<User>;
}
