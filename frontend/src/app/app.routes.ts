import { Routes } from '@angular/router';
import { Task } from './components/task/task';
import { Create } from './components/task/create/create';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'task', component: Task },
    { path: 'task/create', component: Create },
];
