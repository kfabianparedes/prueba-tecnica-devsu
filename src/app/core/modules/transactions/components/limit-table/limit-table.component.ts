import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QUANTITY_OPTIONS } from '../../../../../shared/models/global';


@Component({
  selector: 'limit-table-component',
  templateUrl: './limit-table.component.html',
  styleUrls: ['./limit-table.component.css']
})
export class LimitTableComponent {
  public optionsQuantity = QUANTITY_OPTIONS;
  @Input() countElements : number = 0;
  @Output() quantitySelected : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public onQuantityChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.quantitySelected.emit(Number(selectedValue));
  }

}
