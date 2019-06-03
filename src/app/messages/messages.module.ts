import { MessageService } from './../../../../APM-Start/src/app/messages/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent,
  MessageService],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
