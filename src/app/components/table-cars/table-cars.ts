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
  car: CarInterface = {} as CarInterface;
  idCount: number = 2;
  isUpdate: boolean = false;

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
    if (!this.isUpdate) {
      this.car.id = this.idCount++;
      this.cars.push(this.car);
    }

    this.car = {} as CarInterface;
  }

  removeCar(selectedCar: CarInterface) {
    this.cars = this.cars.filter(car => car != selectedCar);
  }

  updateCar(selectedCar: CarInterface) {
    this.car = selectedCar;
    this.isUpdate = true;
  }
}
