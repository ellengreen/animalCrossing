import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FishComponent } from './critterpedia/fish/fish.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';


@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    FishComponent,
    CritterpediaMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }