import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { CurrentComponent } from './critterpedia/current/current.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';

const routes: Routes = [
  { path: 'critterpedia', component: CritterpediaMainComponent},
{ path: 'critterpedia/bugs', component: BugsComponent },
  { path: 'current', component: CurrentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
