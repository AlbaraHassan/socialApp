import { Body, Controller, Delete, Get, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/userCreate.dto";
import { UserUploadDto } from "./dto/userUpdate.dto";
import { Roles } from "../auth/decorators/roles.decorator";
import { Role } from "../auth/role.enum";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { RolesGuard } from "../auth/guards/roles.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async create(@Body() data: UserCreateDto) {
    return this.userService.create(data);
  }

  @Roles(Role.USER)
  @UseGuards(JwtGuard, RolesGuard)
  @Get("all")
  async getAll() {
    return this.userService.getAll();
  }

  @Get()
  async get(@Query("id") id: string) {
    return this.userService.get(id);
  }

  @Patch()
  async update(@Body() data: UserUploadDto) {
    return this.userService.update(data);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtGuard, RolesGuard)
  @Delete()
  async delete(@Query("id") id: string) {
    return this.userService.delete(id);
  }
}
