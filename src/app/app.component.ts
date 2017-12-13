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

  @Input() newMessage: Message = new Message();
  allMessages: Message[];

  constructor(private messagesService: MessagesService) {

  }

  addMessage() {
    console.log("clicked!");
    console.log(this.newMessage);
    this.messagesService.addMessage(this.newMessage);
    this.newMessage = new Message();
    this.getAllMessages();
  }

  getAllMessages() {
    this.allMessages = this.messagesService.getAllMessages();
  }

}
