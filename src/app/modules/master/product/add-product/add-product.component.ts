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
  single = [
    { name: 'Booked', value: 40 },
    { name: 'Available', value: 60 }
  ];
  medium = [
    { name: "Booked", value: 50 },
    { name: "Available", value: 50 }
  ];

  // Example data for Large Locker
  large = [
    { name: "Booked", value: 70 },
    { name: "Available", value: 30 }
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
      this.router.navigate(['/booked']);
    }
    else if (event.name === "Booked") {
      this.router.navigate(['/booked']);
    }
  }

}
