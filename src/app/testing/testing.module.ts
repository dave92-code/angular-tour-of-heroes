import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './components/testing/testing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    SharedModule,
  ]
})
export class TestingModule { }
