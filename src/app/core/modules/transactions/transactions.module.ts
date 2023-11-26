import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductImplementService } from './services/product-implement.service';
import { LimitTableComponent } from './components/limit-table/limit-table.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ProductFormService } from './services/product-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';

const SERVICES = [
  ProductImplementService,
  ProductFormService
]
const PIPES = [
  FilterTablePipe
]
@NgModule({
  declarations: [
    TransactionsComponent,
    ProductTableComponent,
    LimitTableComponent,
    SearchProductComponent,
    ...PIPES,
    CreateProductComponent,
    DeleteProductModalComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ...SERVICES
  ]
})
export class TransactionsModule { }
