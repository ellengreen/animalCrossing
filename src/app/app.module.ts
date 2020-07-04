import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { AuthenticationService } from './shared/authentication.service';
import { CurrentCrittersComponent } from './dashboard/current-critters/current-critters.component';
import { CurrentFishComponent } from './dashboard/current-critters/current-fish/current-fish.component';
import { CurrentBugsComponent } from './dashboard/current-critters/current-bugs/current-bugs.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './dashboard/events/events.component';
import { BirthdayComponent } from './dashboard/birthday/birthday.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { ProfileComponent } from './profile/profile.component';
import { VillagersComponent } from './villagers/villagers.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CurrentCrittersComponent,
    CurrentFishComponent,
    CurrentBugsComponent,
    NavComponent,
    EventsComponent,
    BirthdayComponent,
    CritterpediaMainComponent,
    VillagersComponent,
    WelcomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthenticationService, DatePipe, KeyValuePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
