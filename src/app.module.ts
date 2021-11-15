import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SubjectsModule,
    TypeOrmModule.forRoot({
      // type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'academic',
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
