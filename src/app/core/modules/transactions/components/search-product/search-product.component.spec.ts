import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductComponent } from './search-product.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('SearchProductComponent', () => {
  let component: SearchProductComponent;
  let fixture: ComponentFixture<SearchProductComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductComponent ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(SearchProductComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  test('Debería crearse el SearchProductComponent', () => {
    expect(component).toBeTruthy();
  });

  test('Debería emitir un evento al cambiar el valor de búsqueda', () => {
    const searchText = 'Product Name';
    const inputElement = fixture.debugElement.query(By.css('.search-product-container__input'));
    const input = inputElement.nativeElement as HTMLInputElement;

    let emittedValue: string | undefined;
    component.searchTextChanged.subscribe((text) => (emittedValue = text));

    input.value = searchText;
    input.dispatchEvent(new Event('input'));

    expect(emittedValue).toBe(searchText);
  });

  test('Debería navegar a la página de creación de productos al hacer clic en el botón "Agregar"', () => {
    const addButton = fixture.debugElement.query(By.css('.search-product-container__button'));
    addButton.triggerEventHandler('click', {});
    expect(router.navigate).toHaveBeenCalledWith(['home/create-product']);
  });
});
