import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductResponse } from '../../../../core/models/product-response';
import { IProduct, Product } from '../models/product.model';
import { ProductClientService } from '../../../services/product-client.service';

@Injectable()
export class ProductImplementService {

  constructor(private productClientService: ProductClientService) { }

  public getProducts(): Observable<Array<Product>> {
    return this.productClientService.getProducts$()
    .pipe(
      map((products: Array<IProduct>) => products.map(product => new Product(product)))
    );
  }

  public createProduct(product: Product): Observable<Product> {
    return this.productClientService.createProduct$(product)
    .pipe(
      map((product: ProductResponse) => new Product(product))
    );
  }

  public validateProductID(productID: string): Observable<boolean> {
    return this.productClientService.validateProductID$(productID);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.productClientService.updateProduct$(product)
    .pipe(
      map((product: ProductResponse) => new Product(product))
    );
  }

  public deleteProduct(param: string): Observable<string> {
    return this.productClientService.deleteProduct$(param);
  }
}
