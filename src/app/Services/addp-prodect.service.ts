import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprodect } from '../models/iprodect';

@Injectable({
  providedIn: 'root',
})
export class AddpProdectService {
  http = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  addProduct(newProdect: Iprodect): Observable<Iprodect> {
    return this.httpClient.post<Iprodect>(
      `http://localhost:3000/prodect`,
      JSON.stringify(newProdect),
      this.http
    );
    
  }
}
