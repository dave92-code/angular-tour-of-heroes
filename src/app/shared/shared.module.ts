import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';

//primeng component testing
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    FormsModule,
    MessagesComponent,

    //primeng component testing
    DialogModule,
    ToggleButtonModule,
    SlideMenuModule,
    AccordionModule,
    DividerModule,
    CalendarModule,
    DropdownModule,
    ListboxModule,
    TabMenuModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers:[
    MessageService
  ]
})
export class SharedModule { }
