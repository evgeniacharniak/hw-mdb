import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';

@Component({
  selector: 'mf-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OopsComponent {
  public getMdbDashboardLink(): string {
    return `../${MDB_DASHBOARD_PATH}`;
  }
}
