import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { IProduct, Product } from '../../models/product.model';
import { ProductImplementService } from '../../services/product-implement.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.css']
})
export class DeleteProductModalComponent implements OnChanges, OnDestroy {
  private subscriptions: Subscription[] = [];
  @Input() product: Product = {} as IProduct;
  @Output() close = new EventEmitter<void>();
  constructor(
    private productImplementService: ProductImplementService,
    private _eventService: EventService
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log('selected:' ,changes['product']);
      this.product = changes['product'].currentValue;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public closeModal(): void {
    this.close.emit();
  }

  public deleteProduct(): void {
    const productImplementSubscription = this.productImplementService.deleteProduct(this.product.id)
      .subscribe({
        next: (response: string) => {
          console.info('Producto eliminado con éxito: ', response);
          this._eventService.notifyCloseModalEvent();
          this.closeModal();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al eliminar el producto', error);
          this.closeModal();
        }
      });
    this.subscriptions.push(productImplementSubscription);

  }
}
