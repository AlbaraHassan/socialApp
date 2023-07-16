import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../core/prisma/prisma.service";
import {UserCreateDto} from "./dto/userCreateDto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create({firstName, lastName, ...data}: UserCreateDto) {
    return this.prisma.user.create({
      data: {
        userInfo: {
          create: {
            firstName,
            lastName
          }
        },
        ...data
      }
    })
  }

  async get(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        userInfo: true
      }
    })
  }
}