import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsController } from './subjects.controller';
import { SubjectsRepository } from './subjects.repository';
import { SubjectsService } from './subjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectsRepository])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
