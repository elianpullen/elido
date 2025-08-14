import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})
export class Task {
  title = '';
  description = '';

  constructor(private http: HttpClient) {
    this.http.get<{
      title: string;
      description: string
    }>('http://127.0.0.1:8000/api/task').subscribe({
      next: data => {
        this.title = data.title;
        this.description = data.description;
      },
      error: err => console.error('API error', err)
    });
  }
}
