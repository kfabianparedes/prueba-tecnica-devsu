import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTP_HEADERS } from "../models/global";

@Injectable({
  providedIn: "root",
})
export class GenericHeaderService {
  constructor() {}

  public getHeader() {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      authorId: HTTP_HEADERS.authorId,
    });

    return httpHeaders;
  }
}