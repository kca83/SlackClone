import { Component, OnInit } from '@angular/core';
import { Message } from '../Messages/message';
import { MessagesService } from '../Messages/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  allMessages: Message[];

  constructor(private messagesService: MessagesService) { }

  observer = {
    next:(value) => {
      console.log(value);
      this.allMessages = value;
    },
    error:function(value){

    },
    complete:function(){
      console.log("Done");
    }
  }

  ngOnInit() {
    this.messagesService.getAllMessages().subscribe(this.observer);
  }

}
