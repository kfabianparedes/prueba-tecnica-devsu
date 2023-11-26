import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { take } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  test('Debería crearse el servicio "EventService" para controlar el modal ', () => {
    expect(service).toBeTruthy();
  });

  test('Debería notificar cuando closeModalEvent es llamado', (done) => {
    service.closeModalEvent$.pipe(take(1)).subscribe(() => done());
    service.notifyCloseModalEvent();
  });

  test('No debería notificar si closeModalEvent no ha sido llamado', fakeAsync(() => {
    const spy = jest.fn();
    service.closeModalEvent$.subscribe(spy);
    tick(100);
    expect(spy).not.toHaveBeenCalled();
  }));

});
