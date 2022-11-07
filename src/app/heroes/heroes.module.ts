import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { HeroesPageComponent } from './components/heroes/heroes-page.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../shared/components/messages/messages.component';
import { SharedModule } from '../shared/shared.module';
import { LabelComponent } from './components/label/label.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { NewHeroComponent } from './components/new-hero/new-hero.component';


@NgModule({
  declarations: [
    HeroTypeComponent,
    HeroesPageComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    LabelComponent,
    NewHeroComponent
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
    HeroesPageComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    LabelComponent
  ]
})
export class HeroesModule { }
