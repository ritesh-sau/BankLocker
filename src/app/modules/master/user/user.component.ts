import { Component } from '@angular/core';
import { ReserveDialogComponent } from './reserve-dialog/reserve-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface ReservedElement {
  position: number;
  lockerId: string;
  customerId: string;
  custName: string;
  accountNo: string;
  action: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  constructor(private dialog: MatDialog){
    
  }

  searchQuery: string = '';
  selectedState: string = '';
  selectedCity: string = '';
  selectedLocality: string = '';
  selectedBranch: string = '';

  states: string[] = ['Maharashtra', 'Karnataka', 'Tamil Nadu'];
  cities: string[] = [];
  localities: string[] = [];
  branches: string[] = [];

  lockerData: any[] = [];
  allLockerData: any[] = [
    { lockerId: 'L001', size: 'Small', available: 20, branchName: 'Andheri East', locality: 'Andheri', city: 'Mumbai', state: 'Maharashtra', address: '123 Andheri Road, Andheri East, Mumbai, Maharashtra' },
    { lockerId: 'L002', size: 'Medium', available: 10, branchName: 'Andheri West', locality: 'Andheri', city: 'Mumbai', state: 'Maharashtra', address: '456 Andheri Lane, Andheri West, Mumbai, Maharashtra' },
    { lockerId: 'L003', size: 'Large', available: 5, branchName: 'Bandra East', locality: 'Bandra', city: 'Mumbai', state: 'Maharashtra', address: '789 Bandra Street, Bandra East, Mumbai, Maharashtra' },
    { lockerId: 'L004', size: 'Small', available: 15, branchName: 'Bandra West', locality: 'Bandra', city: 'Mumbai', state: 'Maharashtra', address: '101 Bandra Avenue, Bandra West, Mumbai, Maharashtra' },
    { lockerId: 'L005', size: 'Medium', available: 12, branchName: 'Kothrud Center', locality: 'Kothrud', city: 'Pune', state: 'Maharashtra', address: '202 Kothrud Road, Kothrud, Pune, Maharashtra' },
    { lockerId: 'L006', size: 'Large', available: 14, branchName: 'SN Main', locality: 'Shivaji Nagar', city: 'Pune', state: 'Maharashtra', address: '303 Shivaji Nagar Main Road, Pune, Maharashtra' }
];


  onStateChange(): void {
    const stateCities: { [key: string]: string[] } = {
      'Maharashtra': ['Mumbai', 'Pune'],
      'Karnataka': ['Bangalore'],
      'Tamil Nadu': ['Chennai']
    };

    this.cities = stateCities[this.selectedState] || [];
    this.selectedCity = '';
    this.localities = [];
    this.branches = [];
    this.updateLockerData();
  }

  onCityChange(): void {
    const cityLocalities: { [key: string]: string[] } = {
      'Mumbai': ['Andheri', 'Bandra'],
      'Pune': ['Kothrud', 'Shivaji Nagar'],
      'Bangalore': ['Indiranagar', 'Jayanagar'],
      'Chennai': ['T Nagar', 'Anna Nagar']
    };

    this.localities = cityLocalities[this.selectedCity] || [];
    this.selectedLocality = '';
    this.branches = [];
    this.updateLockerData();
  }

  onLocalityChange(): void {
    const localityBranches: { [key: string]: string[] } = {
      'Andheri': ['Andheri East', 'Andheri West'],
      'Bandra': ['Bandra East', 'Bandra West'],
      'Kothrud': ['Kothrud Center'],
      'Shivaji Nagar': ['SN Main']
    };

    this.branches = localityBranches[this.selectedLocality] || [];
    this.selectedBranch = '';
    this.updateLockerData();
  }

  updateLockerData(): void {
    this.lockerData = this.allLockerData.filter(locker =>
      (this.selectedState ? locker.state === this.selectedState : true) &&
      (this.selectedCity ? locker.city === this.selectedCity : true) &&
      (this.selectedLocality ? locker.locality === this.selectedLocality : true) &&
      (this.selectedBranch ? locker.branchName === this.selectedBranch : true)
    );
  }

  searchBranch(): void {
    if (!this.searchQuery.trim()) {
      this.updateLockerData(); // Reset table if input is empty
      return;
    }
  
    // Clear dropdown selections when using search
    this.selectedState = '';
    this.selectedCity = '';
    this.selectedLocality = '';
    this.selectedBranch = '';
  
    const query = this.searchQuery.toLowerCase();
  
    // Search across all fields
    this.lockerData = this.allLockerData.filter(locker =>
      locker.lockerId.toLowerCase().includes(query) ||
      locker.size.toLowerCase().includes(query) ||
      locker.branchName.toLowerCase().includes(query) ||
      locker.locality.toLowerCase().includes(query) ||
      locker.city.toLowerCase().includes(query) ||
      locker.state.toLowerCase().includes(query)
    );
  }

  openDialog(element?: any) {
      const dialogRef = this.dialog.open(ReserveDialogComponent, {
        width: '400px',
        data: { lockerId: element.lockerId, custName: element.custName }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'submitted') {
          //this.removeLocker(element);
        }
      });
    }
  
}
