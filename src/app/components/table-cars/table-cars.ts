import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInterface } from '../../../CarInterface';

@Component({
  selector: 'app-table-cars',
  imports: [CommonModule],
  templateUrl: './table-cars.html',
  styleUrl: './table-cars.css',
})
export class TableCars {
  title: string = 'Carros Cadastrados';

  cars: CarInterface[] = [
    {
      id: 1,
      name: 'Renegade',
      brand: 'Jeep',
      price: 35000.00,
      yearMade: 2016
    }
  ];
}
