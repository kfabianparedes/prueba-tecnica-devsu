import { TestBed } from '@angular/core/testing';

import { ProductFormService } from './product-form.service';
import { FormBuilder } from '@angular/forms';

describe('ProductFormService', () => {
  let service: ProductFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        ProductFormService,
        FormBuilder
      ]
    });
    service = TestBed.inject(ProductFormService);
  });

  test('Debería crearse el productForm', () => {
    expect(service).toBeTruthy();
  });
});
