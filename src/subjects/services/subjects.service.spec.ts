import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import TestUtil from '../../common/testUtil';
import { Subject } from '../subject.entity';
import { CreateSubjectService } from './create-subject';
import { SubjectsRepository } from '../repository/subjects.repository';
import { SubjectsModule } from '../subjects.module';
import { ListSubjectsService } from './list-subject';

describe('SubjectsService', () => {
  let createSubjectService: CreateSubjectService;
  let listSubjectsService: ListSubjectsService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
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
    createSubjectService =
      module.get<CreateSubjectService>(CreateSubjectService);
    listSubjectsService = module.get<ListSubjectsService>(ListSubjectsService);
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
  });

  it('should be defined', () => {
    expect(createSubjectService).toBeDefined();
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
