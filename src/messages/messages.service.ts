import { MessagesRepository } from './messages.repository';

export class MessagesService {
  // creating an instance of the Message Repository
  messageRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies.
    // DONT DO THIS ON REAL APPS
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  finsAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
