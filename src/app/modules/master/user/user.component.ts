import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
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
    { lockerId: 'L001', size: 'Small', branchName: 'Andheri East', locality: 'Andheri', city: 'Mumbai', state: 'Maharashtra' },
    { lockerId: 'L002', size: 'Medium', branchName: 'Andheri West', locality: 'Andheri', city: 'Mumbai', state: 'Maharashtra' },
    { lockerId: 'L003', size: 'Large', branchName: 'Bandra East', locality: 'Bandra', city: 'Mumbai', state: 'Maharashtra' },
    { lockerId: 'L004', size: 'Small', branchName: 'Bandra West', locality: 'Bandra', city: 'Mumbai', state: 'Maharashtra' },
    { lockerId: 'L005', size: 'Medium', branchName: 'Kothrud Center', locality: 'Kothrud', city: 'Pune', state: 'Maharashtra' },
    { lockerId: 'L006', size: 'Large', branchName: 'SN Main', locality: 'Shivaji Nagar', city: 'Pune', state: 'Maharashtra' }
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
      this.updateLockerData();
      return;
    }

    this.lockerData = this.allLockerData.filter(locker =>
      locker.branchName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
