import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  /**añade un mensaje al array
   * @param message tipo string
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**limpia los mensajes */
  clear() {
    this.messages = [];
  }
}
