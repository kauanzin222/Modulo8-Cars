import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCars } from './table-cars';

describe('TableCars', () => {
  let component: TableCars;
  let fixture: ComponentFixture<TableCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
