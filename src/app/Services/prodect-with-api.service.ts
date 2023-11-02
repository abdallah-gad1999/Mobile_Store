import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprodect } from '../models/iprodect';

@Injectable({
  providedIn: 'root',
})
export class ProdectWithApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProdect(): Observable<Iprodect[]> {
    return this.httpClient.get<Iprodect[]>('http://localhost:3000/prodect');
  }

  getProdectByID(prdId: number): Observable<Iprodect> {
    return this.httpClient.get<Iprodect>(`http://localhost:3000/prodect/${prdId}`);
  }

  removeProdectById(prdId: number): Observable<Iprodect> {
    return this.httpClient.delete<Iprodect>(`http://localhost:3000/prodect/${prdId}`);
  }
  getProdectList(): Observable<Iprodect[]> {
    return this.httpClient.get<Iprodect[]>('http://localhost:3000/prodect');
  }
}  
