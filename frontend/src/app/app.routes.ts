import { TaskAdd } from './components/task/task-add/task-add';
import { TaskOverview } from './components/task/task-overview/task-overview';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'task', component: TaskOverview },
    { path: 'task/add', component: TaskAdd },
];
