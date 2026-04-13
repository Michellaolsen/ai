import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { ChatInterface } from './chat-interface/chat-interface';

@Component({
  selector: 'app-root',
  imports: [Sidebar, ChatInterface],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
