import { Component, signal } from '@angular/core';
import { MenuItemService } from './menu-items';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {

  constructor(private menuItemService: MenuItemService) {}

  menuItems = this.menuItemService.menuItems;

  // Track open states of items with children using a Map
  nestedMenuStates = signal(new Map<string, boolean>());

  toggleNested(item: any) {
    if (!item.children) {
      return;
    }

    // Get current state of the item
    const currentState = this.nestedMenuStates().get(item.name) || false;

    // Update the state by creating a new Map with the modified entry
    const updatedState = new Map(this.nestedMenuStates());
    updatedState.set(item.name, !currentState);
    
    // Set the new state
    this.nestedMenuStates.set(updatedState);
  }

  // Check if a specific item is open
  isItemOpen(item: any): boolean {
    return this.nestedMenuStates().get(item.name) || false;
  }
}
