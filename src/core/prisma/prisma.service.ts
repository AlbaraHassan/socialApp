import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // Was making a fuss when running the server:dev environment

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
