import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../shared/models/endpoints';
import { GenericService } from '../../shared/services/generic.service';
import { ProductResponse } from '../models/product-response';
import { Observable } from 'rxjs';
import { IProduct } from '../modules/transactions/models/product.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProductClientService {

  constructor(
    private genericService: GenericService
  ) { }

  public getProducts$(): Observable<ProductResponse[]> {
    return this.genericService.genericGet<ProductResponse[]>(ENDPOINTS.PRODUCT);
  }

  public createProduct$(body: IProduct): Observable<ProductResponse> {
    return this.genericService.genericPost<ProductResponse>(ENDPOINTS.PRODUCT,body);
  }

  public updateProduct$(body: IProduct): Observable<ProductResponse> {
    return this.genericService.genericPut<ProductResponse>(ENDPOINTS.PRODUCT,body);
  }

  public deleteProduct$(param: string): Observable<string> {
    const httpParams = new HttpParams().set("id", param);
    return this.genericService.genericDelete<string>(ENDPOINTS.PRODUCT,httpParams,'text');
  }

  public validateProductID$(param: string): Observable<boolean> {
    const httpParams = new HttpParams().set("id", param);
    return this.genericService.genericGet<boolean>(ENDPOINTS.VERIFICATION_PRODUCT_ID,httpParams);
  }
}
