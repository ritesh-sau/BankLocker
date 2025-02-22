import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private router: Router) {}

  view: [number, number] = [500, 300]; // Chart size

  // Donut chart data
  small = [
    { name: 'Booked', value: 25 },
    { name: 'Available', value: 15 }
  ];
  medium = [
    { name: "Booked", value: 15 },
    { name: "Available", value: 15 }
  ];

  // Example data for Large Locker
  large = [
    { name: "Booked", value: 20 },
    { name: "Available", value: 10 }
  ];

  // Define color scheme properly
  colorScheme: any = {
    domain: ['#ff5733', '#33b5e5'] // Two colors (Red and Blue)
  };

  // Chart settings
  showLegend = false;
  isDoughnut = true;

  // Handle chart click event
  onChartClick(event: any, lockerType: string): void {
    if (event.name === "Booked") {
      this.router.navigate(['/branch/booked']);
    }
    else if (event.name === "Available") {
      this.router.navigate(['/branch/available']);
    }
  }

  getLockerCount(lockers: any[]): number {
    return lockers.reduce((total, item) => total + item.value, 0);
  }
  

}
