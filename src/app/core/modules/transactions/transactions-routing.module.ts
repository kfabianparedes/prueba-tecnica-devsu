import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { CreateProductComponent } from './views/create-product/create-product.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'update-product/:productId', component: CreateProductComponent },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
