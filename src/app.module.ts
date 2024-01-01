import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { FarmsModule } from './farms/farms.module';
import { UsersModule } from './users/users.module';
import { CultivarsModule } from './cultivars/cultivars.module';
import { ModelsModule } from './models/models.module';
import { NewsModule } from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'lodash';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

function initDatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    // type: 'mysql',
    // host: get(process.env, 'SQL_HOST', 'hpcc.hcmut.edu.vn'),
    // charset: 'utf8mb4',
    // port: parseInt(get(process.env, 'SQL_PORT', '23306')),
    // // TODO: Change to read from .env file for security
    // username: 'hpcc_irrigation',
    // password: 'hpcc@irrigation@123',
    // // TODO: change to read from .env
    // database: 'smart_irrigation_db',
    // entities: [User],
    // synchronize: true,
    // extra: {
    //   charset: 'utf8mb4_unicode_ci',
    // },
  });
}

@Module({
  imports: [
    initDatabaseOrmModule(),
    UsersModule,
    FarmsModule,
    ScenariosModule,
    ActivitiesModule,
    CultivarsModule,
    ModelsModule,
    NewsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
