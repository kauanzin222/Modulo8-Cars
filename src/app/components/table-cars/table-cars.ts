import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInterface } from '../../../CarInterface';
import { RegisterCar } from '../register-car/register-car';

@Component({
  selector: 'app-table-cars',
  imports: [CommonModule, RegisterCar],
  templateUrl: './table-cars.html',
  styleUrl: './table-cars.css',
})
export class TableCars {
  newCar: CarInterface = {} as CarInterface;
  idCount: number = 2;

  cars: CarInterface[] = [
    {
      id: 1,
      name: 'Renegade',
      brand: 'Jeep',
      price: 35000.00,
      yearMade: 2016
    }
  ];

  saveCar() {
    this.newCar.id = this.idCount++;
    this.cars.push(this.newCar);
    this.newCar = {} as CarInterface; 
  }
}
