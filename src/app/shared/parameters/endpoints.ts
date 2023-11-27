import { environment } from "../../../environments/environment";

export class ENDPOINTS {
  public static PRODUCT = `${environment.api}/bp/products`;
  public static VERIFICATION_PRODUCT_ID = `${this.PRODUCT}/verification`;
}