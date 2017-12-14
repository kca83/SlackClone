import { Injectable } from '@angular/core';
import { Message } from './message';
import {Observable, Subject, BehaviorSubject} from "rxjs";

@Injectable()
export class MessagesService {

  lastId: number = 0;

  messages: Message[] = [];
  subject = new BehaviorSubject<Message>(new Message());
  nextMessage = this.subject.asObservable();

  constructor() {
  }

  addMessage(message: Message): MessagesService {
    if (!message.id) {
      message.id = ++this.lastId;
    }
    this.messages.push(message);
    console.log("added message: " + message.id);
    console.log(this.subject.getValue());
    this.subject.next(message);
    console.log(this.subject.getValue());
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

  // getAllMessages(): Observable<Message> {
  //   return this.myObservable;
  // }

  getMessageById(id: number): Message {
    return this.messages
      .filter(message => message.id === id)
      .pop();
  }

}
