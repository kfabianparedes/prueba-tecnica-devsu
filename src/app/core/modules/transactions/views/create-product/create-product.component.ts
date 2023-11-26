import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductFormService } from '../../services/product-form.service';
import { ProductImplementService } from '../../services/product-implement.service';
import { IProduct, Product } from '../../models/product.model';
import { Subscription, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create-product-component',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public isUpdating: boolean = false;
  public productId: string | null = null;

  constructor(
    public productFormService: ProductFormService,
    private productImplementService: ProductImplementService,
    public _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this._route.paramMap.subscribe(params => {
      this.productId = params?.get('productId');
      this.isUpdating = !!this.productId;

      if(this.isUpdating) {
        this.productFormService.idControl.disable();
      }else{
        this.productFormService.resetForm();
        this.productFormService.idControl.enable();
      }
      
    });
    
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  public saveProduct(): void {
    const productBody = new Product({
      id: this.productFormService.idControl.value,
      name: this.productFormService.nameControl.value,
      description: this.productFormService.descriptionControl.value,
      logo: this.productFormService.logoControl.value,
      date_release: this.productFormService.dateReleaseControl.value,
      date_revision: this.productFormService.dateRevisionControl.value
    } as IProduct);

    if ( !this.isUpdating ) {
      this.saveNewProduct(productBody)
    }else {
      this.updateProduct(productBody);
    }
  }

  public saveNewProduct(newProduct: Product): void {
    const productImplementSubscription = this.productImplementService.validateProductID(newProduct.id)
    .pipe(
      switchMap((idExists: boolean) => {
        if (idExists) {
          this.productFormService.idControl.setErrors({idDuplicated:true});
          return throwError(()=> Error('El ID del producto ya existe.')); 
        } else {
          return this.productImplementService.createProduct(newProduct);
        }
      })
    )
    .subscribe({
      next: (response: Product) => {
        console.info('Producto creado con éxito', response);
        this.resetForm();
        this._router.navigate(['home']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al crear el producto', error);
      }
    });
    this.subscriptions.push(productImplementSubscription);
  }

  public updateProduct(product: Product): void {
    const productImplementSubscription = this.productImplementService.updateProduct(product)
    .subscribe({
      next: (response: Product) => {
        console.info('Producto actualizado con éxito', response);
        this.resetForm();
        this._router.navigate(['home']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al crear el producto', error);
      }
    });
    this.subscriptions.push(productImplementSubscription);
  }

  public resetForm(): void {
    this.isUpdating ? this.productFormService.resetUpdateForm() : this.productFormService.resetForm();
  }

  public goBack(): void {
    this._router.navigate(['home']);
  }
}
