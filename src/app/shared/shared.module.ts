import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LazyImgComponent } from './components/lazy-img/lazy-img.component';

const COMPONENTS = [
  HeaderComponent,
  ModalComponent,
  LazyImgComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
