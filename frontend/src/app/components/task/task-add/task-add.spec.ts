import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAdd } from './task-add';

describe('TaskAdd', () => {
  let component: TaskAdd;
  let fixture: ComponentFixture<TaskAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
