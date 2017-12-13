export class Message {
  id: number;
  body: string = '';
  userId: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
