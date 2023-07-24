import {Injectable} from "@nestjs/common";
import * as process from "process";

@Injectable()
export class AppConfigService {
  public get jwtSecret() {
    return process.env.JWT_SECRET
  }

  public get rounds() {
    return Number(process.env.ROUNDS)
  }
}