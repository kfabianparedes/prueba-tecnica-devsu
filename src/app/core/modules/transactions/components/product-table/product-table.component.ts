import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct, Product } from '../../models/product.model';
import { ModalService } from '../../../../../shared/services/modal.service';
import { ProductFormService } from '../../services/product-form.service';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Input() searchText: string = '';

  public selectedProductId : string | null;
  public showToggleOptions : boolean = false;
  public productToDelete: Product;
  constructor(
    public modalService: ModalService,
    public productFormService: ProductFormService,
    public _router: Router
    ) { 
    this.selectedProductId = '';
    this.productToDelete = {} as IProduct;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.products = [...changes['products'].currentValue];
    }
    if (changes['searchText']){
      this.searchText = {...changes['searchText'].currentValue};
    }
  }

  public toggleOptions(productId: string) {
    this.selectedProductId === productId ? this.hideOptions() : this.showOptions(productId);
  }

  public showOptions(productId:string) {
    this.showToggleOptions = true;
    this.selectedProductId = productId;
  }

  public hideOptions() {
    this.showToggleOptions = false;
    this.selectedProductId = null;
  }

  public updateProduct(product: Product) {
    this.showToggleOptions = false;
    this.productFormService.setProductValues(product);
    this._router.navigate(['home/update-product', this.productFormService.idControl.value ]);
  }

  public deleteProduct(product: Product) {
    this.showToggleOptions = false;
    this.productToDelete = product;
    this.modalService.openModal();
  }
  
  public closeModal(){
    this.modalService.closeModal();
  }
}
