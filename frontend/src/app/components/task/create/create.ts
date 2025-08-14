import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../../services/task';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create.html',
  styleUrls: ['./create.scss'],
})
export class Create {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: Task) {
    this.form = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addItem() {
    const formData = this.form.value;

    this.taskService.createItem(formData).subscribe(response => {
      console.log('Item created:', response);
    });
  }
}
