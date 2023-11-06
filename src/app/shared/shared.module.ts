import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
  HeaderComponent
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
