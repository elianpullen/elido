import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Task {
  private apiUrl = 'http://127.0.0.1:8000/api/task/create';

  constructor(private http: HttpClient) { }

  createItem(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
