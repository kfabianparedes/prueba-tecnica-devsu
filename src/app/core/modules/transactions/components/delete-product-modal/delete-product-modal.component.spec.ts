import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductModalComponent } from './delete-product-modal.component';
import { ProductImplementService } from '../../services/product-implement.service';
import { ProductClientService } from '../../../../services/product-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

describe('DeleteProductModalComponent', () => {
  let component: DeleteProductModalComponent;
  let fixture: ComponentFixture<DeleteProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DeleteProductModalComponent,ModalComponent ],
      providers: [ProductImplementService,ProductClientService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
