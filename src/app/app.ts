import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header-component/header-component";
import { RegisterCar } from './components/register-car/register-car';
import { TableCars } from "./components/table-cars/table-cars";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, RegisterCar, TableCars, FormsModule]
})
export class App {
 
}
