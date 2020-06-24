import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { NavComponent } from './nav/nav.component';
import { KeyValuePipe, DatePipe } from '@angular/common';
import { NookipediaService } from './shared/nookipedia.service';
import { FishComponent } from './critterpedia/fish/fish.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FirebaseService } from './shared/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    CritterpediaMainComponent,
    NavComponent,
    FishComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KeyValuePipe, DatePipe, NookipediaService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }