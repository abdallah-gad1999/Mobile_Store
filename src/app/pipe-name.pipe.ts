import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: number, discountPercent: number = 25): number {
    if (isNaN(value) || isNaN(discountPercent)) {
      return value;
    }
  
    const discountAmount = (value * discountPercent) / 100;
    return value - discountAmount;
  }
}