import { Module } from '@nestjs/common';

import { CoreModule } from 'src/core/core.module';
import {UserModule} from "./modules/user/user.module";


@Module({
  imports: [CoreModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
