import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>{{ userName }}</h1>`,
  styleUrls: ['./task.css']  // fix typo here
})
export class Task {
  protected readonly title = signal('elido');
  userName = '';

  constructor(private http: HttpClient) {
    this.http.get<{ name: string }>('http://127.0.0.1:8000/api/test').subscribe({
      next: data => this.userName = data.name,
      error: err => console.error('API error', err)
    });
  }
}
