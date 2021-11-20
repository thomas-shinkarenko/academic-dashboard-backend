import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import TestUtil from '../../common/testUtil';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';
import { SubjectsModule } from '../subjects.module';
import { ListSubjectsService } from './list-subject';

describe('SubjectsService', () => {
  let listSubjectsService: ListSubjectsService;

  const mockRepository = {
    createQueryBuilder: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
          keepConnectionAlive: true,
        }),
        TypeOrmModule.forFeature([Subject]),
      ],
      providers: [SubjectsRepository],
    }).compile();
    listSubjectsService = module.get<ListSubjectsService>(ListSubjectsService);
  });

  it('should be defined', () => {
    expect(listSubjectsService).toBeDefined();
  });

  describe('List Subjects', () => {
    it('should list all subjects', async () => {
      mockRepository.createQueryBuilder.mockReturnValue([]);
      const subjects = await listSubjectsService.listSubjects({
        code: '',
      });
      expect(subjects).toHaveLength(2);
    });
  });
});
