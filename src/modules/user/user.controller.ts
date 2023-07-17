import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/userCreateDto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserCreateDto) {
    return this.userService.create(data);
  }

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get()
  async get(@Query("id") id: string) {
    return this.userService.get(id);
  }

  @Put()
  async update(@Query("id") id: string, @Body() data: UserCreateDto) {
    return this.userService.update(id, data);
  }

  @Put("upsert")
  async upsert(@Query("id") id: string, @Body() data: UserCreateDto) {
    return this.userService.upsert(id, data);
  }

  @Delete()
  async delete(@Query("id") id: string) {
    return this.userService.delete(id);
  }
}
