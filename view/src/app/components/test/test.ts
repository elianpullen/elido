import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-test',
  imports: [MatListModule, MatDividerModule, MatGridListModule, MatCardModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class Test {

}