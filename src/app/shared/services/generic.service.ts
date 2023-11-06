import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { GenericHeaderService } from "./generic-header.service";

@Injectable({
  providedIn: "root"
})
export class GenericService {
  constructor(private http: HttpClient, private _genericHeaderService: GenericHeaderService) {}

  public genericGet<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const options = this.createRequestOptions(params);
    
    return this.http.get<T>(endpoint, options).pipe(
      tap(_ => this.log(`Get ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericGet ${endpoint}`, error))
    );
  }

  public genericPost<T>(endpoint: string, body: Object, params?: HttpParams): Observable<T> {
    const options = this.createRequestOptions(params);
    return this.http.post<T>(endpoint, body, options).pipe(
      tap(_ => this.log(`Post ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericPost ${endpoint}`, error))
    );
  }

  public genericPut<T>(endpoint: string, body: Object, params?: HttpParams): Observable<T> {
    const options = this.createRequestOptions(params);
    
    return this.http.put<T>(endpoint, body, options).pipe(
      tap(_ => this.log(`Put ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericPut ${endpoint}`, error))
    );
  }

  public genericDelete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const options = this.createRequestOptions(params);
    return this.http.delete<T>(endpoint, options).pipe(
      tap(_ => this.log(`Delete ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericDelete ${endpoint}`, error))
    );
  }
  
  private createRequestOptions(params?: HttpParams, headers: HttpHeaders = this._genericHeaderService.getHeader()) {
    return { headers, params };
  }
  
  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', error: any): Observable<T> {
    this.log(`${operation} failed: ${error.message}`);
    throw new Error(`Error in ${operation}: ${error.message}`);
  }
}