import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePasswordComponent } from './update-password.component';

const routes: Routes = [
  { path: '', component: UpdatePasswordComponent,
  // resolve: { movieDetails: MovieDetailsResolver },
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePasswordRoutingModule { }

export const UPDATE_PASSWORD_COMPONENTS = [UpdatePasswordComponent]
