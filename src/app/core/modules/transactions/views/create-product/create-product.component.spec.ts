import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductComponent } from './create-product.component';
import { ProductImplementService } from '../../services/product-implement.service';
import { ProductFormService } from '../../services/product-form.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductClientService } from '../../../../services/product-client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IProduct, Product } from '../../models/product.model';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('Pruebas en CreateProductComponent:', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let httpTestingController: HttpTestingController;
  let service: ProductImplementService;
  let formService: ProductFormService;
  let router: Router
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [CreateProductComponent],
      providers: [
        ProductImplementService,
        ProductClientService,
        ProductFormService,
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => '123' }) // Puedes ajustar esto según tus necesidades de prueba
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductImplementService);
    formService = TestBed.inject(ProductFormService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  test('Debería crear el componente: CreateProductComponent', () => {
    expect(component).toBeTruthy();
  });

  test('Debería permitir crear un nuevo producto', () => {
    const product = new Product({
      id: "product-03",
      name: "Producto Tercera Parte",
      description: "Esto es una descripción producto 3ra parte",
      logo: "prueba-img.jpg",
      date_release: "2023-11-05",
      date_revision: "2024-11-05"
    } as IProduct);

    formService.idControl.setValue(product.id);
    formService.nameControl.setValue(product.name);
    formService.descriptionControl.setValue(product.description);
    formService.logoControl.setValue(product.logo);
    formService.dateReleaseControl.setValue(product.date_release);
    formService.dateRevisionControl.setValue(product.date_revision);
    
    expect(formService.idControl.value).toBe('product-03');
    expect(formService.nameControl.value).toBe('Producto Tercera Parte');
    
    jest.spyOn(service, 'validateProductID').mockReturnValue(of(false));
    jest.spyOn(service, 'createProduct').mockReturnValue(of(product));
    jest.spyOn(router, 'navigate');

    component.saveNewProduct(product);

    expect(service.validateProductID).toHaveBeenCalledWith('product-03');
    expect(service.createProduct).toHaveBeenCalledWith(product);
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  test('Debería resetear el formulario', () => {
    component.isUpdating = true;
    jest.spyOn(formService, 'resetForm');
    jest.spyOn(formService, 'resetUpdateForm');
    component.resetForm();
    expect(formService.resetUpdateForm).toHaveBeenCalled();
    expect(formService.resetForm).not.toHaveBeenCalled();
  });

});
