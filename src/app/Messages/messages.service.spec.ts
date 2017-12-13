import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { Message } from './message';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllMessages()', () => {

    it('should return an empty array by default', inject([MessagesService], (service: MessagesService) => {
      expect(service.getAllMessages()).toEqual([]);
    }));

    it('should return all messages', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      let message2 = new Message({body: "Hello 2", userId: 19});
      service.addMessage(message1);
      service.addMessage(message2);
      expect(service.getAllMessages()).toEqual([message1, message2]);
    }));

  });

  describe('#save(message)', () => {

    it('should automatically assign an incrementing id', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      let message2 = new Message({body: "Hello 2", userId: 19});
      service.addMessage(message1);
      service.addMessage(message2);
      expect(service.getMessageById(1)).toEqual(message1);
      expect(service.getMessageById(2)).toEqual(message2);
    }));

  });

  describe('#deleteMessageById(id)', () => {

    it('should remove message with the corresponding id', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      let message2 = new Message({body: "Hello 2", userId: 19});
      service.addMessage(message1);
      service.addMessage(message2);
      expect(service.getAllMessages()).toEqual([message1, message2]);
      service.deleteMessageById(1);
      expect(service.getAllMessages()).toEqual([message2]);
      service.deleteMessageById(2);
      expect(service.getAllMessages()).toEqual([]);
    }));

    it('should not removing anything if message with corresponding id is not found', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      let message2 = new Message({body: "Hello 2", userId: 19});
      service.addMessage(message1);
      service.addMessage(message2);
      expect(service.getAllMessages()).toEqual([message1, message2]);
      service.deleteMessageById(3);
      expect(service.getAllMessages()).toEqual([message1, message2]);
    }));

  });

  describe('#updateMessageById(id, values)', () => {

    it('should return message with the corresponding id and updated data', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      service.addMessage(message1);
      let updatedMessage = service.updateMessageById(1, {
        body: "Hello 1 updated"
      });
      expect(updatedMessage.body).toEqual("Hello 1 updated");
    }));

    it('should return null if message is not found', inject([MessagesService], (service: MessagesService) => {
      let message1 = new Message({body: "Hello 1", userId: 7});
      service.addMessage(message1);
      let updatedMessage = service.updateMessageById(2, {
        body: "Hello 1 updated"
      });
      expect(updatedMessage).toEqual(null);
    }));

  });
});
