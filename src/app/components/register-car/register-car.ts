import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarInterface } from '../../../CarInterface';

@Component({
  selector: 'app-register-car',
  imports: [FormsModule],
  templateUrl: './register-car.html',
  styleUrl: './register-car.css',
})
export class RegisterCar {
  title: string = 'Cadastrar Carro';

  car: CarInterface = {};
}