import { Iprodect } from 'src/app/models/iprodect';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  prodectData: Iprodect[];
  constructor() {
    this.prodectData = [
      {
        id: 1,
        name: 'Infinix Smart 7 6.6inch 64GB/4GB Dual SIM Mobile Phone Green',
        Quantity: 0,
        Price: 10000,
        CateogryID: 2,
        Img: 'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/iphone-xs-max-2018-300x300.png?resize=290,290&key=4e010216',
      },
      {
        id: 2,
        name: 'Samsung Galaxy A14 - 6.6 Inches - 4GB Ram 128GB Internal Memor',
        Quantity: 100,
        Price: 10000,
        CateogryID: 1,
        Img: 'https://i.ebayimg.com/images/g/cwgAAOSwSONixxz4/s-l1200.webp',
      },
      {
        id: 3,
        name: 'Samsung Galaxy A24 - 6.5-inch 128GB/8GB Dual Sim 4G Mobile',
        Quantity: 50,
        Price: 10000,
        CateogryID: 1,
        Img: 'https://officialphonerepair.co.uk/wp-content/uploads/2021/12/SwappieXsSilver-1-1-1.jpg',
      },
      {
        id: 4,
        name: 'Samsung Galaxy A14 - 6.6 Inches - 4GB Ram 128GB Internal Memor',
        Quantity: 1,
        Price: 10000,
        CateogryID: 3,
        Img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/711544/1.jpg?6094',
      },
      {
        id: 5,
        name: 'Infinix Smart 7 6.6inch 64GB/4GB Dual SIM Mobile Phone Green',
        Quantity: 200,
        Price: 10000,
        CateogryID: 2,
        Img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/637574/1.jpg?7547',
      },
      {
        id: 6,
        name: 'realme 10 6.4 Inch 256GB/8GB RAM Dual SIM 4G Mobile Phone',
        Quantity: 1,
        Price: 10000,
        CateogryID: 2,
        Img: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/077764/1.jpg?7814https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/711544/1.jpg?6094',
      },
      {
        id: 7,
        name: 'Samsung Galaxy A24 - 6.5-inch 128GB/4GB Dual Sim 4G Mobile',
        Quantity: 20,
        Price: 20000,
        CateogryID: 1,
        Img: 'https://m.media-amazon.com/images/I/51zNkEdn6fL.jpg',
      },
      {
        id: 8,
        name: 'Samsung Galaxy A14 - 6.6 Inches - 4GB Ram 128GB Internal Memor',
        Quantity: 1,
        Price: 50000,
        CateogryID: 1,
        Img: 'https://cf4.certideal.com/19912-thickbox_default/iphone-x-256-gb-grigio-siderale.jpg',
      },
      {
        id: 9,
        name: 'Samsung Galaxy A14 - 6.6-inch 4GB/128GB Dual Sim 4G - Mobile',
        Quantity: 70,
        Price: 2000,
        CateogryID: 1,
        Img: 'https://www.seekpng.com/png/detail/293-2932072_iphone-x-back-silver.png',
      },
      {
        id: 10,
        name: 'Samsung A14 - 6.6 inches, 4GB/64GB RAM 4G Dual SIM',
        Quantity: 1,
        Price: 20000,
        CateogryID: 1,
        Img: 'https://mobizil.com/wp-content/uploads/2018/09/iphone-xs-max.jpg',
      },
      {
        id: 11,
        name: 'Samsung Galaxy A24 - 6.5-inch 128GB/8GB Dual Sim 4G Mobile',
        Quantity: 50,
        Price: 10000,
        CateogryID: 3,
        Img: 'https://m.media-amazon.com/images/I/81UgcMtmCEL._AC_UF894,1000_QL80_.jpg',
      },
      {
        id: 12,
        name: 'Samsung Galaxy A14 - 6.6 Inches - 4GB Ram 128GB Internal Memor',
        Quantity: 5,
        Price: 10000,
        CateogryID: 1,
        Img: 'https://m.media-amazon.com/images/I/81O1DLcCNKL.jpg',
      },
    ];
  }

  getAllProdect(): Iprodect[] {
    return this.prodectData;
  }
  performFilter(FilterValue: string): Iprodect[] {
    FilterValue = FilterValue.toLowerCase();
    const filterNumber = parseFloat(FilterValue);

    return this.prodectData.filter((prd: Iprodect) => {
      if (!isNaN(filterNumber)) {
        return prd.Price === filterNumber;
      }
      return false;
    });
  }
  getprodByID(prdID: number): Iprodect | undefined {
    return this.prodectData.find((prd) => prd.id == prdID);
  }

  getPageByID(): number[] {
    return this.prodectData.map((prd) => prd.id);
  }

  getelmentBiIdLest(): number[] {
    return this.prodectData.map((prd) => prd.id);
  }
}
