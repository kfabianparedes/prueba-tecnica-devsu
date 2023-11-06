import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { ProductImplementService } from './services/product-implement.service';
import { ProductClientService } from '../../services/product-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { LimitTableComponent } from './components/limit-table/limit-table.component';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { of } from 'rxjs';

describe('Pruebas en TransactionsComponent: ', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let productImplementService: ProductImplementService;
  let productClientService: ProductClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ 
        TransactionsComponent,
        SearchProductComponent,
        ProductTableComponent,
        LimitTableComponent,
        FilterTablePipe 
      ],
      providers:[ProductImplementService,ProductClientService]
    })
    .compileComponents();

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    productImplementService = TestBed.inject(ProductImplementService);
    productClientService = TestBed.inject(ProductClientService);
    fixture.detectChanges();
  });

  test('Debería crear el componente TransactionComponent', () => {
    expect(component).toBeTruthy();
  });

  test('Debería llamar a _getProducts al inicializar el componente', () => {
    jest.spyOn(component, 'getProducts');
    component.ngOnInit();
    expect(component.getProducts).toHaveBeenCalled();
  });

  test('Debería actualizar la propiedad displayedProducts al llamar a displayProducts', () => {
    const quantity = 5;
    component.products = [
      {
          id: 'trj-crd-0',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-1',
          name: 'Tarjetas de Credito',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-2',
          name: 'Card 2',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-3',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-4',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-5',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-6',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-7',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-8',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-9',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-10',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-11',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-12',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-13',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-14',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-15',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-16',
          name: 'Tarjetas de Credito PARTE 0',
          description: 'Tarjeta de consumo bajo la modalidad de credito',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-03-11T00:00:00.000+00:00',
          date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
          id: 'prudcto-01',
          name: 'Producto Nuevo',
          description: 'Descripción del producto',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-10-31T00:00:00.000+00:00',
          date_revision: '2023-11-11T00:00:00.000+00:00',
      },
      {
          id: 'trj-crd-17',
          name: 'Producto Nuevo',
          description: 'Descripción del producto',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-11-04T00:00:00.000+00:00',
          date_revision: '2024-11-05T00:00:00.000+00:00',
      },
      {
          id: 'prudcto-02',
          name: 'Prueba Producto',
          description: 'Descripción del producto',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: '2023-11-04T00:00:00.000+00:00',
          date_revision: '2024-11-04T00:00:00.000+00:00',
      },
      {
          id: 'prudcto-03',
          name: 'Producto Tercera Parte',
          description: 'Esto es una descripción producto 3ra parte',
          logo: 'prueba-img.jpg',
          date_release: '2023-11-05T00:00:00.000+00:00',
          date_revision: '2024-11-05T00:00:00.000+00:00',
      },
    ];
    component.displayProducts(quantity);
    expect(component.displayedProducts.length).toBe(quantity);
  });

  test('Debería actualizar la propiedad searchProductByName al llamar a searchProduct', () => {
    const searchText = 'PRUEBA';
    component.searchProduct(searchText);
    expect(component.searchProductByName).toBe(searchText);
  });

  test('Debería realizar una prueba relacionada con las llamadas al servicio o suscripciones', () => {
    // Ejemplo de cómo podrías probar las llamadas a los servicios si se aplican en el componente.
    const mockProducts = [
      {
        id: 'trj-crd-0',
        name: 'Tarjetas de Credito PARTE 0',
        description: 'Tarjeta de consumo bajo la modalidad de credito',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        date_release: '2023-03-11T00:00:00.000+00:00',
        date_revision: '2024-02-01T00:00:00.000+00:00',
      },
      {
        id: 'trj-crd-1',
        name: 'Tarjetas de Credito',
        description: 'Tarjeta de consumo bajo la modalidad de credito',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        date_release: '2023-03-11T00:00:00.000+00:00',
        date_revision: '2024-02-01T00:00:00.000+00:00',
      }
    ];
    jest.spyOn(productImplementService, 'getProducts').mockReturnValue(of(mockProducts));
    component.ngOnInit();
    expect(productImplementService.getProducts).toHaveBeenCalled();
    expect(component.products).toEqual(mockProducts);
  });

});
