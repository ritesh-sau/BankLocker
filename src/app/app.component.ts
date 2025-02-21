import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bank Locker';

  isLoggedIn = signal(false);

  collapsed = signal(false);

  sideNavWith = computed(() => this.collapsed() ? '65px' : '250px');

   loginSuccess() {
    this.isLoggedIn.set(true);  // Set to true after login
  }
}
