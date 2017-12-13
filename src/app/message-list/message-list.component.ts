import { Component, OnInit } from '@angular/core';
import { Message } from '../Messages/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  allMessages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
