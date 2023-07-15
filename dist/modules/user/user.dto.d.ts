import { UserInfoDTO } from "./userInfo.dto";
export declare class UserDTO {
    email: string;
    password: string;
}
export declare class UserRequestDTO {
    user: UserDTO;
    info: UserInfoDTO;
}
export declare class ChangePasswordDTO {
    email: string;
    oldPassword: string;
    newPassword: string;
}
