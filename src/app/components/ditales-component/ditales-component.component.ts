import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import { Iprodect } from './../../models/iprodect';
import { Router } from '@angular/router';
import { ProdectWithApiService } from 'src/app/Services/prodect-with-api.service';
@Component({
  selector: 'app-ditales-component',
  templateUrl: './ditales-component.component.html',
  styleUrls: ['./ditales-component.component.css'],
})
export class DitalesComponentComponent implements OnInit {
  ProdectID: number = 0;
  prodect: Iprodect | undefined;
  getprodectLEST: number[] = [];
  courntprodectIndex: number = 0;
  constructor(
    private prdDitals: ServicesService,
    private activeted: ActivatedRoute,
    private router: Router,
    private pordectWithApi:ProdectWithApiService
  ) {}

  ngOnInit(): void {
    // this.ProdectID = this.activeted.snapshot.paramMap.has('prdid')
    //   ? Number(this.activeted.snapshot.paramMap.get('prdid'))
    //   : 0;
    //   console.log(this.ProdectID, "nooooo")
    // Get product details by ID from your service
    // this.prodect = this.prdDitals.getprodByID(this.ProdectID);
    // console.log('id prodect is', this.prodect);

    this.getprodectLEST = this.prdDitals.getelmentBiIdLest();
    console.log(this.getprodectLEST, 'fannnnn');

    this.activeted.paramMap.subscribe((param) => {
      this.ProdectID = param.get('prdid') ? Number(param.get('prdid')) : 0;
      // let foundProdect = this.prdDitals.getprodByID(this.ProdectID);
      // if (foundProdect) {
      //   this.prodect = foundProdect;
      // }
      this.pordectWithApi.getProdectByID(this.ProdectID).subscribe(data=>{
        this.prodect=data;
      })
    });
  }

  prevPage() {
    this.courntprodectIndex = this.getprodectLEST.indexOf(this.ProdectID);

    this.router.navigate([
      'ProdectDitales',
      this.getprodectLEST[--this.courntprodectIndex],
    ]);
    console.log(this.ProdectID);
  }
  nextPage() {
    this.courntprodectIndex = this.getprodectLEST.indexOf(this.ProdectID);

    this.router.navigate([
      'ProdectDitales',
      this.getprodectLEST[++this.courntprodectIndex],
    ]);
  }
  homePage() {
    this.router.navigate(['/prodect']);
  }
}
