import {Injectable, UnauthorizedException} from "@nestjs/common";
import {UserCreateDto} from "../user/dto/userCreateDto";
import {JwtHelper} from "../../core/helpers/jwtHelper";
import * as bcrypt from 'bcrypt'
import {AppConfigService} from "../../core/config/appConfig.service";
import {UserService} from "../user/user.service";
import {AuthDto} from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwt: JwtHelper, private readonly config: AppConfigService) {
  }

  async register({password, ...data}: UserCreateDto) {
    const hashedPassword = await bcrypt.hash(password, this.config.rounds)
    return this.userService.create({...data, password: hashedPassword})
  }

  async login({email, password}: AuthDto) {
    const {password: savedPassword, id} = await this.userService.getByEmail(email)
    if (!id || !await bcrypt.compare(password, savedPassword)) {
      throw new UnauthorizedException();
    }
    return {accessToken: await this.jwt.sign({email, id})}

  }
}