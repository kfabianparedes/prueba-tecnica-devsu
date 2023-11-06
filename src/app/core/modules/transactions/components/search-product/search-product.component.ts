import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'header-table-search-create',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSearchChange(event: Event): void {
    const searchText = event.target as HTMLInputElement;
    const textValue = searchText.value;
    this.searchTextChanged.emit(textValue);
  }

  public newProduct(): void {
    this._router.navigate(['home/create-product']);
  }

}
