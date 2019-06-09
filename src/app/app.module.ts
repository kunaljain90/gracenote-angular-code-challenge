import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { MedalsTableComponent } from './medals-table/medals-table.component';
import { MedalsCountrySummaryComponent } from './medals-country-summary/medals-country-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { MedalsSportsTypeComponent } from './medals-sports-type/medals-sports-type.component';
import { MedalsByParticipantsComponent } from './medals-by-participants/medals-by-participants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MedalsTableComponent,
    MedalsCountrySummaryComponent,
    MedalsSportsTypeComponent,
    MedalsByParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
