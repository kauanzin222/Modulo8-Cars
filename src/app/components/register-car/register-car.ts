import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarInterface } from '../../../CarInterface';

@Component({
  selector: 'app-register-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-car.html',
  styleUrl: './register-car.css',
})
export class RegisterCar {
  @Input()
  car: CarInterface = {} as CarInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
