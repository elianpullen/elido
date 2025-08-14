import { Component } from '@angular/core';
import { Task } from '../../../services/task';

@Component({
  // selector: 'app-create',
  imports: [],
  // templateUrl: './create.html',
  // styleUrl: './create.css'
  template: `<button (click)="addItem()">Add Item</button>`
})
export class Create {
  constructor(private Task: Task) { }

  addItem() {
    this.Task.createItem('Test').subscribe(response => {
    });

  }
}
