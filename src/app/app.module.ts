import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { StatCardsComponent } from '../app/cards/stat-cards/stat-cards.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { SectionCardComponent } from './cards/section-card/section-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputSectionComponent,
    StatCardsComponent,
    CardsSectionComponent,
    SectionCardComponent,
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
