import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountPercent: number = 25): number {
    const discountAmount = (value * discountPercent) / 100;
    const discountedValue = value - discountAmount;
    return discountedValue;
  }
}
