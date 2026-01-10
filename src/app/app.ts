import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Home } from "./component/home/home";
import { Midle } from "./component/midle/midle";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Midle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('saas-web-desing');
}
