import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe implements PipeTransform {

  public transform<T>(array: Array<T>, key: keyof T, value: unknown): Array<T> {
    return value === 'none' ? array : array.filter(el => el[key] === value);
  }

}
