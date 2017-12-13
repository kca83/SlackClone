import { Component, OnInit } from '@angular/core';
import { Message } from '../Messages/message';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {

  @Input() newMessage: Message = new Message();

  constructor() { }

  ngOnInit() {
  }

}
