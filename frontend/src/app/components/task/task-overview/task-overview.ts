import { Task } from './../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './task-overview.html',
  styleUrls: ['./task-overview.scss'],
})

export class TaskOverview implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.viewTask().subscribe({
      next: data => {
        this.tasks = data;
      },
    });
  }
}