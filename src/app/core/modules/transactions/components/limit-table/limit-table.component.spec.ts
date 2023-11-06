import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitTableComponent } from './limit-table.component';
import { QUANTITY_OPTIONS } from '../../../../../shared/models/global';
import { By } from '@angular/platform-browser';

describe('LimitTableComponent', () => {
  let component: LimitTableComponent;
  let fixture: ComponentFixture<LimitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitTableComponent ]
    })
    .compileComponents();

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(LimitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Debería crear el componente LimitTableComponent', () => {
    expect(component).toBeTruthy();
  });

  test('Debería emitir un evento al cambiar la cantidad de elementos', () => {
    const selectElement = fixture.debugElement.query(By.css('.options-container__select'));
    const quantity = QUANTITY_OPTIONS.medium;
    let emittedValue: number | undefined;

    component.quantitySelected.subscribe((value) => (emittedValue = value));

    selectElement.nativeElement.value = quantity;
    selectElement.triggerEventHandler('change', { target: selectElement.nativeElement });

    expect(emittedValue).toBe(10);
  });

});
