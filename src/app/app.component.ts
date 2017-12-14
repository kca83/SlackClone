import { Component, Input } from '@angular/core';
import { MessagesService } from './Messages/messages.service';
import { Message } from './Messages/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService]
})
export class AppComponent {
  title = 'app';
  // 
  // @Input() newMessage: Message = new Message();
  // allMessages: Message[];

  constructor(private messagesService: MessagesService) {

  }


  // getAllMessages() {
  //   this.allMessages = this.messagesService.getAllMessages();
  // }

}
