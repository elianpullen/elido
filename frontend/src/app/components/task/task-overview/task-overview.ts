import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../../models/task.model';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './task-overview.html',
  styleUrls: ['./task-overview.scss'],
})
export class TaskOverview {
  apiUrl: string = environment.apiUrl; // TODO: remove in future, same as add.task
  tasks: Task[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Task[]>(this.apiUrl + '/api/task').subscribe({
      next: data => {
        this.tasks = data;
      },
      error: err => console.error('API error', err)
    });
  }
}