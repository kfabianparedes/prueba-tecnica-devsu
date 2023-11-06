import { isObject } from "../../shared/helpers/object-helper";

export interface IProductResponse {
  id: string,
  name: string,
  description: string,
  logo: string,
  date_release: string,
  date_revision: string
}

export class ProductResponse {
  public id: string;
  public name: string;
  public description: string;
  public logo: string;
  public date_release: string;
  public date_revision: string;
  constructor( product : IProductResponse){
    const currentValue = isObject(product) ? product : {} as IProductResponse;
    this.id = currentValue.id || '';
    this.name = currentValue.name || '';
    this.description = currentValue.description || '';
    this.logo = currentValue.logo || '';
    this.date_release = currentValue.date_release || '';
    this.date_revision = currentValue.date_revision || '';
  }
}