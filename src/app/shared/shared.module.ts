import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import {  DialogModule } from 'primeng/dialog';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SlideMenuModule} from 'primeng/slidemenu';




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
    DialogModule,
    ToggleButtonModule,
    SlideMenuModule
  ]
})
export class SharedModule { }
