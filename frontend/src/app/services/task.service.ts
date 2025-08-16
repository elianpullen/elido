import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addTask(data: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl + '/api/task/add', data);
  }

  viewTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/api/task');
  }
}
