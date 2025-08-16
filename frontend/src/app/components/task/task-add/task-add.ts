import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../../../services/taskservice';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './task-add.html',
  styleUrls: ['./task-add.scss'],
})
export class TaskAdd {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addTask() {
    const formData = this.form.value;

    this.taskService.addTask(formData).subscribe(response => {
      console.log('Task added:', response); // remove in future
    });
  }
}
