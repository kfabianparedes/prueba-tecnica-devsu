import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';
import { ProductClientService } from './services/product-client.service';

const COMPONENTS = [
  CoreComponent
]
const SERVICES = [
  ProductClientService
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [
    ...SERVICES
  ]
})
export class CoreModule { }
