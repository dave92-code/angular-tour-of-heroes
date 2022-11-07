import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import {  DialogModule } from 'primeng/dialog'




@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    MessagesComponent,
    DialogModule
  ]
})
export class SharedModule { }
