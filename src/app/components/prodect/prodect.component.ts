import { ProdectWithApiService } from './../../Services/prodect-with-api.service';
import { Route, Routes } from '@angular/router';
import { ServicesService } from './../../Services/services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iprodect } from './../../models/iprodect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css'],
})
export class ProdectComponent implements OnInit {
  prodictListFilter: Iprodect[] = [];

  @Input() set filterListINCild(value: string) {
    this.prodictListFilter = this.prdServices.performFilter(value);
  }
Date1:Date=new Date()
  @Output() addprodectToCard = new EventEmitter<Iprodect>();

  constructor(
    private prdServices: ServicesService,
    private Router: Router,
    private ProdectWithApiService: ProdectWithApiService
  ) {}

  buyProduct(product: Iprodect) {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }

  ngOnInit(): void {
    this.ProdectWithApiService.getAllProdect().subscribe({
      next: (data) => {
        this.prodictListFilter = data;
        console.log(this.prodictListFilter, 'server');
      },
      error: (error) => {
        console.error('Error fetching products', error);
      },
    });
  }

  addToCard(val: Iprodect) {
    this.addprodectToCard.emit(val);
  }

  prdDitales(prdID: number) {
    this.Router.navigate(['/ProdectDitales', prdID]);
  }

  removeProduct(productId: number) {
    this.ProdectWithApiService.removeProdectById(productId).subscribe({
      next: (result) => {
        console.log('Product removed successfully', result);
        this.prodictListFilter = this.prodictListFilter.filter((product) => product.id !== productId);
      },
      error: (error) => {
        console.error('Error removing product', error);
      },
    });
  }
}
