import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Enviroment/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class ProductesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this._HttpClient.get(`${Environment.baseURL}products`)
  }

}
