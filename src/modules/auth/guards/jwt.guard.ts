import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import * as jwt from "jsonwebtoken";
import { AppConfigService } from "../../../core/config/appConfig.service";

@Injectable()
export class JwtGuard extends AuthGuard("jwt") {

  constructor(private readonly config: AppConfigService) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractJwtFromRequest(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      request.user = jwt.verify(token, this.config.jwtSecret);
      return true;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  private extractJwtFromRequest(request: any): string | null {
    const authorizationHeader = request.headers.authorization;

    if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
      return authorizationHeader.substring(7);
    }

    return null;
  }
}