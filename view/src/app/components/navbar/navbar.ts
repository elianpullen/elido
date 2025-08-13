import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar { }
