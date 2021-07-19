import { Pipe, PipeTransform } from '@angular/core';

import { OrderDirection } from '@mf-app/features/mdb-dashboard/models/order-direction';
import { MINUS_ONE, ONE } from '@mf-app/shared/models/constants';

@Pipe({
  name: 'orderBy',
})
export class OrderPipe implements PipeTransform {

  public transform<T>(value: Array<T> | null, key: keyof T, direction: OrderDirection): Array<T> {
    return (value ?? []).sort((a, b) => new Intl.Collator()
      .compare(String(a[key]), String(b[key])) * (direction === 'asc' ? ONE : MINUS_ONE));
  }

}
