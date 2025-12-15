import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header-component/header-component";
import { RegisterCar } from './components/register-car/register-car';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, RegisterCar]
})
export class App {
 
}
