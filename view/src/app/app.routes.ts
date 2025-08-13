import { Routes } from '@angular/router';
import { Task } from './components/task/task';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'task', component: Task },
];
