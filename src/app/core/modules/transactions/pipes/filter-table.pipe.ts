import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {

  transform(products: Product[], value: Object): Product[] {
    if (!products || !value || typeof value !== 'object') {
      return products;
    }
    const searchString = this.convertObjectToString(value).toLocaleUpperCase();

    return products.filter(product => {
      return typeof product.name === 'string' && product.name.toLocaleUpperCase().includes(searchString);
    });
  }

  private convertObjectToString(obj: Object): string {
    return Object.values(obj).join('');
  }
}
