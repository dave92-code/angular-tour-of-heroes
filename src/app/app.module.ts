import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LabelComponent } from './components/label/label.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';

//componentes de prime-ng
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { TareasComponent } from './components/tareas/tareas.component';
import {CardModule} from 'primeng/card'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LabelComponent,
    HeroTypeComponent,
    HeroesComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ListboxModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
