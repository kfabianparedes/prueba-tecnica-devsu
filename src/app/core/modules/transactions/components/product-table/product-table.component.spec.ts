import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTableComponent } from './product-table.component';
import { FilterTablePipe } from '../../pipes/filter-table.pipe';
import { Product } from '../../models/product.model';
import { By } from '@angular/platform-browser';
import { ProductFormService } from '../../services/product-form.service';
import { FormBuilder } from '@angular/forms';
import { LazyImgComponent } from '../../../../../shared/components/lazy-img/lazy-img.component';

describe('ProductTableComponent', ()=>{
  let component : ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTableComponent,FilterTablePipe, LazyImgComponent],
      providers: [ProductFormService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
  });

  test('Debería crearse el componente: ',()=>{
    expect(component).toBeTruthy();
  });

  test('Debe capturar el cambio de la lista de Productos recibios como Input(): ',()=>{
    const currentProducts: Product[] = [
      {
        id: "trj-crd-0",
        name: "Tarjetas de Credito",
        description: "Tarjeta de consumo bajo la modalidad de credito",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-03-11T00:00:00.000+00:00",
        date_revision: "2024-02-01T00:00:00.000+00:00"
      },
      {
        id: "trj-crd-2",
        name: "Card 2",
        description: "Tarjeta de consumo bajo la modalidad de credito",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-03-11T00:00:00.000+00:00",
        date_revision: "2024-02-01T00:00:00.000+00:00"
      },
      {
        id: "prueba-01",
        name: "Producto Nuevo",
        description: "Descripción del producto",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-11-05T00:00:00.000+00:00",
        date_revision: "2024-11-05T00:00:00.000+00:00"
      }
    ];
    component.products = [...currentProducts];
    component.searchText = '';
    fixture.detectChanges();
    expect(component.products.length).toBe(3);
    expect(component.searchText).toBe('');
  });

  test('Debe actualizar la cantidad de filas de la tabla cuando se envía la lista de productos: ', () => {
    const dummyProducts = [
      {
        id: "prudcto-03",
        name: "Producto Tercera Parte",
        description: "Esto es una descripción producto 3ra parte",
        logo: "prueba-img.jpg",
        date_release: "2023-11-05T00:00:00.000+00:00",
        date_revision: "2024-11-05T00:00:00.000+00:00"
      },
      {
        id: "producto-04",
        name: "Producto Jest",
        description: "Prueba del servicio con Jest",
        logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        date_release: "2023-03-11T00:00:00.000+00:00",
        date_revision: "2024-02-01T00:00:00.000+00:00"
      }
    ]
    component.products = [...dummyProducts];
    fixture.detectChanges();
    const tableRows = fixture.debugElement.queryAll(By.css('.table-container__content_body'));
    expect(tableRows.length).toBe(dummyProducts.length);
  });
  

});





// });
