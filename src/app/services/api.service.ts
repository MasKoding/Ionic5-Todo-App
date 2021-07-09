import { BaseModel } from './../models/BaseModel';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment }  from './../../environments/environment';
import { retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends BaseModel> {



  httpOptions = {
    'content-Type':'application/json'
  };

  constructor(
      private http: HttpClient,
      private url: string,
      private endpoint: string
    ) {}

   getAll(): Observable<T[]>{
    return this.http.get<T[]>(this.url+this.endpoint)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
   }
   getById(id: string): Observable<T>{
     return this.http.get<T>(this.url+this.endpoint+'/'+id)
     .pipe(
      retry(2),
      catchError(this.handleError)
    );
   }
   save(item: T): Observable<T>{
     return this.http.post<T>(this.url+this.endpoint,item)
     .pipe(
      retry(2),
      catchError(this.handleError)
    );
   }
   update(item: T): Observable<T>{
    return this.http.put<any>(this.url+this.endpoint+'/'+item.id,item)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  delete(item: T){
    return this.http.delete(this.url+this.endpoint+'/'+item.id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage=`Error Code:${error.status}\nMessage:${error.message}`;
    }

    return throwError(errorMessage);
  }
}
