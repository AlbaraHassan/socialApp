import { Module } from "@nestjs/common";
import { CoreModule } from "../../core/core.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { RolesGuard } from "./guards/roles.guard";
import { JwtGuard } from "./guards/jwt.guard";
import { JwtStrategy } from "./guards/jwt.strategy";


@Module({
  imports: [CoreModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtGuard, JwtStrategy, RolesGuard]
})

export class AuthModule {
}
