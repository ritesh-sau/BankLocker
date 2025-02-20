import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  states = ['Bihar', 'Maharashtra', 'Karnataka'];
  citiesMap: { [key: string]: string[] } = {
    Bihar: ['Arrah', 'Patna'],
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bangalore', 'Mysore']
  };
  branchesMap: { [key: string]: any[] } = {
    Arrah: [{ name: 'Arrah', address: 'ICICI Bank Ltd., Apporva Tower, Opposite Sadar Hospital, Arrah, Bhojpur Dist., Bihar', city: 'Arrah', pincode: '802301', state: 'Bihar' }],
    Patna: [{ name: 'Patna Main', address: 'ICICI Bank Ltd., Main Road, Patna, Bihar', city: 'Patna', pincode: '800001', state: 'Bihar' }],
    Mumbai: [{ name: 'Mumbai Main', address: 'ICICI Bank Ltd., Nariman Point, Mumbai, Maharashtra', city: 'Mumbai', pincode: '400021', state: 'Maharashtra' }],
    Pune: [{ name: 'Pune Camp', address: 'ICICI Bank Ltd., MG Road, Pune, Maharashtra', city: 'Pune', pincode: '411001', state: 'Maharashtra' }],
    Bangalore: [{ name: 'Bangalore Main', address: 'ICICI Bank Ltd., MG Road, Bangalore, Karnataka', city: 'Bangalore', pincode: '560001', state: 'Karnataka' }],
    Mysore: [{ name: 'Mysore Branch', address: 'ICICI Bank Ltd., Mysore, Karnataka', city: 'Mysore', pincode: '570001', state: 'Karnataka' }]
  };

  branchForm = new FormGroup({
    state: new FormControl(''),
    city: new FormControl(''),
    branch: new FormControl('')
  });

  cities: string[] = [];
  branches: any[] = [];
  selectedBranch: any = null;

  onStateChange() {
    const selectedState = this.branchForm.value.state as string; // Ensure it's treated as a string
    this.cities = this.citiesMap[selectedState] || []; // Use optional chaining
    this.branchForm.controls.city.setValue('');
    this.branches = [];
    this.selectedBranch = null;
  }
  
  onCityChange() {
    const selectedCity = this.branchForm.value.city as string; // Ensure it's treated as a string
    this.branches = this.branchesMap[selectedCity] || []; // Use optional chaining
    this.branchForm.controls.branch.setValue('');
    this.selectedBranch = null;
  }
  

  onBranchSelect() {
    this.selectedBranch = this.branches.find(branch => branch.name === this.branchForm.value.branch) || null;
  }

}
