import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {

  lastId: number = 0;

  messages: Message[] = [];

  constructor() { }

  addMessage(message: Message): MessagesService {
    if (!message.id) {
      message.id = ++this.lastId;
    }
    this.messages.push(message);
    return this;
  }

  deleteMessageById(id: number): MessagesService {
    this.messages = this.messages
      .filter(message => message.id !== id);
    return this;
  }

  updateMessageById(id: number, values: Object = {}): Message {
    let message = this.getMessageById(id);
    if (!message) {
      return null;
    }
    Object.assign(message, values);
    return message;
  }

  getAllMessages(): Message[] {
    return this.messages;
  }

  getMessageById(id: number): Message {
    return this.messages
      .filter(message => message.id === id)
      .pop();
  }
  
}
