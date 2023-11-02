import { AddpProdectService } from 'src/app/Services/addp-prodect.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IaddProdect } from 'src/app/models/iadd-prodect';
import {Iprodect} from 'src/app/models/iprodect'
@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent {
  prodect: Iprodect = {} as Iprodect;

  constructor(private addpProdectService: AddpProdectService) {}

  addnewprodect() {
    this.addpProdectService.addProduct(this.prodect).subscribe({
      next: (prodect) => {},
    });
    console.log(this.prodect)
  }
}
