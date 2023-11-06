import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductImplementService } from './services/product-implement.service';
import { Product } from './models/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { QUANTITY_OPTIONS } from '../../../shared/models/global';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public displayedProducts: Product[] = [];
  public searchProductByName: string = '';
  constructor(private productImplementService: ProductImplementService) { }

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }
  
  public getProducts(): void {
    const productImplementSubscription = this.productImplementService.getProducts().subscribe({  
      next: (response: Product[]) =>{
        this.products = [...response];
        this.displayedProducts = this.products.slice(0, QUANTITY_OPTIONS.low);
      },
      error: (error: HttpErrorResponse)=>{
        console.error(error);
      }
    });
    this.subscriptions.push(productImplementSubscription);

  }

  public displayProducts(quantity: number): void {
    this.displayedProducts = this.products?.slice(0,quantity) || [];
  }

  public searchProduct(text: string): void {
    this.searchProductByName = text;
  }
}
