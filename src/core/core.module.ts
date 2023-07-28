import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { AppConfigService } from "./config/appConfig.service";
import { JwtHelper } from "./helpers/jwtHelper";


@Module({
  imports: [],
  providers: [PrismaService, AppConfigService, JwtHelper],
  exports: [PrismaService, AppConfigService, JwtHelper]
})
export class CoreModule {
}
