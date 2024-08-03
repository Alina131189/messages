import { readFile, writeFile } from 'fs/promises';

/**
 * In NestJS, a repository is used to abstract and manage database operations for a specific entity.
 * It encapsulates CRUD operations (Create, Read, Update, Delete), facilitating a clear separation between business logic and data access layers.
 */
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    // big object with all messages
    const messages = JSON.parse(contents);

    // create randomly a new ID (number)
    const id = Math.floor(Math.random() * 999);

    // We add a new IDs as a property (key) to our big object of messages
    messages[id] = { id, content };

    // Here we turn the whole object into a string
    await writeFile('message.json', JSON.stringify(messages));
  }
}
