import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { InputMessageComponent } from './input-message/input-message.component';
import { MessagesService } from './Messages/messages.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    InputMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
