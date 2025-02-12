import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe',
  standalone: false
})
export class TestpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
