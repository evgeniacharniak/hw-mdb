import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { MdbDataService } from '../shared/services/mdb-data.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ],
  providers: [
    MdbDataService,
  ],
})
export class CoreModule { }
