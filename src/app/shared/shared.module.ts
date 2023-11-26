import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

const COMPONENTS = [
  HeaderComponent,
  ModalComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
