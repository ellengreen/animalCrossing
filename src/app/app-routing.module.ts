import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillagersComponent } from './villagers/villagers.component';

const routes: Routes = [
  { path: 'villagers', component: VillagersComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
  // { path: 'forgot', component: ForgotPasswordComponent },
  // { path: 'verify-email', component: VerifyEmailComponent },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
