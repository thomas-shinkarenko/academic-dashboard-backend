import { Subject } from '../subjects/subject.entity';

export default class TestUtil {
  static createValidSubject(): Subject {
    const subject = new Subject();
    subject.code = 'ZZZYYY1A';
    subject.name = 'Matéria Teste';
    subject.course = 'Curso Teste';
    return subject;
  }
}
