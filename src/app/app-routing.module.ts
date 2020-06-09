import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: 'home', component: DashboardComponent },
  // { path: 'profile', component: ProfileComponent },

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
