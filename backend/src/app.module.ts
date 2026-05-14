import { Module } from '@nestjs/common';

import { DiscoveryModule } from '@nestjs/core';
import { ApiConfigModule } from './config.moudle';
import { UsersModule } from './modules/users/users.module';
import { UserRepositoryModule } from './modules/users/repositories/users.repository.module';
import { ConfigModule } from '@nestjs/config';



@Module({
    imports: [
        ConfigModule.forRoot({
      isGlobal: true,
    }),
        ApiConfigModule,
        UsersModule,
        UserRepositoryModule,
        DiscoveryModule,
    ],
    providers: []
})
export class AppModule { }
 