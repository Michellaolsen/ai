import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isOpen = true;

  @HostBinding('class.collapsed') get isCollapsed() {
    return !this.isOpen;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
