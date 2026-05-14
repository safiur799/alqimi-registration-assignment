import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';

import { ApiConfigModule } from './config.moudle';
import { UsersModule } from './modules/users/users.module';
import { UserRepositoryModule } from './modules/users/repositories/users.repository.module';

@Module({
  imports: [
    ApiConfigModule,
    UsersModule,
    UserRepositoryModule,
    DiscoveryModule,
  ],
  providers: [],
})
export class AppModule {}