import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentCrittersComponent } from './dashboard/current-critters/current-critters.component';
import { CurrentBugsComponent } from './dashboard/current-critters/current-bugs/current-bugs.component';
import { CurrentFishComponent } from './dashboard/current-critters/current-fish/current-fish.component';

import { DatePipe, KeyValuePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    CurrentCrittersComponent,
    CurrentBugsComponent,
    CurrentFishComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe, KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
