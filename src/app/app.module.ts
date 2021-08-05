import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app.component';

import { CoreModule } from '@mf-app/core/core.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
