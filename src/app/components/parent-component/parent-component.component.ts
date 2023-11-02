import { Component } from '@angular/core';
import { Iprodect } from 'src/app/models/iprodect';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  filterListINCild:string="";
  cart:Iprodect[]=[]
  addToCard(addNewProdect:Iprodect){
    this.cart.push(addNewProdect);
  }
}