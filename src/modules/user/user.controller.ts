import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserCreateDto} from "./dto/userCreateDto";

@Controller('user')
export class UserController{
  constructor(private readonly userService: UserService) {
  }


  @Post()
  async create(@Body() data: UserCreateDto){
    return this.userService.create(data)
  }

  @Get()
  async get(@Query('id') id: string){
    return this.userService.get(id)
  }
}