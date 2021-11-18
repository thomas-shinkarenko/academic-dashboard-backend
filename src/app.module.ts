import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SubjectsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'mysqlshinka',
      database: 'academic_dashboard',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
