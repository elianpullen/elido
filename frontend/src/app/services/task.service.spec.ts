import { TestBed } from '@angular/core/testing';
import { TaskOverview } from '../components/task/task-overview/task-overview'


describe('Task', () => {
  let service: TaskOverview;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskOverview);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
