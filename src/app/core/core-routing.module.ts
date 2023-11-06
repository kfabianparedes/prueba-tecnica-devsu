import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { 
    path:'', 
    component:CoreComponent, 
    children:[
      { path:'home', loadChildren: () => import('./modules/transactions/transactions.module').then( m => m.TransactionsModule )},
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'**', redirectTo:''}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
