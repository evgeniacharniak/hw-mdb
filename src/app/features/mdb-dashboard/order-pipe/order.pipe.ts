import { Pipe, PipeTransform } from '@angular/core';
import { orderDirection } from '../models/order-direction';

@Pipe({
  name: 'orderBy'
})
export class OrderPipe implements PipeTransform {

  public transform<T>(value: Array<T> | null, key: keyof T, direction: orderDirection): Array<T> {
    return (value ?? []).sort((a, b) => {
      return new Intl.Collator().compare(String(a[key]), String(b[key])) * (direction === 'asc' ? 1 : -1);
    });
  }

}
