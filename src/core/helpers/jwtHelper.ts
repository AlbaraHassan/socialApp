import * as jwt from 'jsonwebtoken'
import {Injectable} from "@nestjs/common";
import {AppConfigService} from "../config/appConfig.service";
import {User} from "@prisma/client";

@Injectable()
export class JwtHelper {
  constructor(private readonly config: AppConfigService) {
  }

  async sign(data: Omit<User, 'password'>) {
    return jwt.sign(data, this.config.jwtSecret)
  }
}