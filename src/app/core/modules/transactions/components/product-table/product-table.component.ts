import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Input() searchText: string = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.products = [...changes['products'].currentValue];
    }
    if (changes['searchText']){
      this.searchText = {...changes['searchText'].currentValue};
    }
  }

}
