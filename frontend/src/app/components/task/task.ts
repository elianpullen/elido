import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './task.html',
  styleUrls: ['./task.scss'],
})
export class Task {
  tasks: Task[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('http://127.0.0.1:8000/api/task').subscribe({
      next: data => {
        this.tasks = data;
      },
      error: err => console.error('API error', err)
    });
  }
}
