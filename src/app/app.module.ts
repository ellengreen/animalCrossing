import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DatePipe, KeyValuePipe } from '@angular/common'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProfileComponent } from 'src/app/profile/prof';
import { AuthenticationService } from './shared/authentication.service';

import { NavComponent } from './nav/nav.component';

import { VillagersComponent } from './villagers/villagers.component';


@NgModule({
  declarations: [
    AppComponent,
    // ProfileComponent,
    NavComponent,
    VillagersComponent
    
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