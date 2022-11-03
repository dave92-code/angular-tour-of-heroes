import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SharedModule } from '../shared/shared.module';
import { LabelComponent } from './components/label/label.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';


@NgModule({
  declarations: [
    HeroTypeComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent,
    LabelComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HeroesRoutingModule,
    CalendarModule,
    DropdownModule,
    ListboxModule
  ],
  exports:[
    HeroTypeComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent,
    LabelComponent
  ]
})
export class HeroesModule { }
