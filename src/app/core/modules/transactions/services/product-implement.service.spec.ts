import { TestBed } from '@angular/core/testing';

import { ProductImplementService } from './product-implement.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductClientService } from '../../../../core/services/product-client.service';

describe('Pruebas en ProductImplementService:', () => {
  let service: ProductImplementService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductImplementService,ProductClientService],
    });
    service = TestBed.inject(ProductImplementService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  test('El servicio ProductImplementService debe haberse creado', () => {
    expect(service).toBeTruthy();
  });

});
