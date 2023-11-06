import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../shared/components/header/header.component';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CoreComponent, HeaderComponent],
    })
    .compileComponents();

  });
  
  beforeEach( () => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Debería crear el componente CoreComponent:', () => {
    expect(component).toBeTruthy();
  });

  test('Debería renderizar <header-component> y <router-outlet>', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header-component')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

});
