import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private closeModalEventSubject = new BehaviorSubject<void>(undefined);
  closeModalEvent$ = this.closeModalEventSubject.asObservable();

  notifyCloseModalEvent() {
    this.closeModalEventSubject.next();
  }

  constructor() { }
}
