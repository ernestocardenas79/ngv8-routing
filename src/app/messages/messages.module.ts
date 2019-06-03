import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [MessageComponent,
  MessageService],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
