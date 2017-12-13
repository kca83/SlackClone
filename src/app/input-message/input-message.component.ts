import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessagesService } from '../Messages/messages.service';
import { Message } from '../Messages/message';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css'],
  providers: [MessagesService]
})
export class InputMessageComponent implements OnInit {

  @Input() newMessage: Message = new Message();

  // @Output() textChange: EventEmitter<string> = new EventEmitter();

  constructor(private messagesService: MessagesService) {

  }

  addMessage() {
    console.log("clicked!");
    console.log(this.newMessage);
    this.messagesService.addMessage(this.newMessage);
    this.newMessage = new Message();
  }

  ngOnInit() {
  }

}
