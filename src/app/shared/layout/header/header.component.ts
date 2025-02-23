import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  showLogout: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Define the routes where the logout button should be visible
        const logoutRoutes = ['/branch/available', '/master/product/addProduct', '/branch/booked'];
        this.showLogout = logoutRoutes.includes(event.url);
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
