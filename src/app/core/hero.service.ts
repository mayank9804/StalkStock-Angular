import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class HeroService {
  public BASE_URL:string = environment.path;

  constructor(private _http: HttpClient) { }

  public getList():any{
    return this._http.get(`${this.BASE_URL}/api/stock/list/`).pipe(
      catchError(err=>throwError(err))
    )
  }

  public getDetail(data):any{
    
    data.day = Number(data.date.split('-')[2]).toString();
    data.month = Number(data.date.split('-')[1]).toString();
    data.year = Number(data.date.split('-')[0]).toString();
    return this._http.post<any>(`${this.BASE_URL}/api/stock/stockdetails/`,data).pipe(
      catchError(err=>throwError(err))
    )
  }
}
