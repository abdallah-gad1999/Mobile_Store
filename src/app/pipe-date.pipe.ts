import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDate'
})
export class PipeDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
