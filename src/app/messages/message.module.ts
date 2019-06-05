import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    SharedModule
  ]
})
export class MessageModule { }
