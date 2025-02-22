import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-available-branch',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,FormsModule,CommonModule],
  templateUrl: './available-branch.component.html',
  styleUrl: './available-branch.component.scss'
})
export class AvailableBranchComponent {

  constructor(private router: Router) {};
  displayedColumns: string[] = ['position', 'lockerNo', 'custId', 'action'];
  
  // Predefined list of valid Customer IDs
  validCustIds: string[] = ['CUST123', 'CUST456', 'CUST789'];

  // Sample Data
  dataSource = new MatTableDataSource([
    { position: 1, lockerNo: 'S001', custId: '', isValid: false },
    { position: 2, lockerNo: 'P002', custId: '', isValid: false },
    { position: 3, lockerNo: 'R003', custId: '', isValid: false },
    { position: 4, lockerNo: 'I002', custId: '', isValid: false },
    { position: 5, lockerNo: 'P003', custId: '', isValid: false }
  ]);

  // Check if entered custId is in the valid list
  checkCustId(element: any) {
    if (!element.custId) {
      element.isValid = null; // Reset validation if input is empty
      return;
    }
  
    element.custId = element.custId.toUpperCase(); // Convert input to uppercase
    element.isValid = this.validCustIds.includes(element.custId);
  }

  // Function to handle button click
  bookLocker(element: any) {
    alert(`Locker No.: ${element.lockerNo} booking succesfully for Customer ID: ${element.custId}`);
  }

  // Apply Filter Function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  goBack() {
    this.router.navigate(['/master/product/addProduct']);
  }
}
