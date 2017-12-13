import { Message } from './message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let message = new Message({
      id: 1,
      body: "This is my message"
    });
    expect(message.id).toEqual(1);
    expect(message.body).toEqual("This is my message");
  });
});
