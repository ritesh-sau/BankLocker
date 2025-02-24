import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

export interface LockerElement {
  position: number;
  lockerNo: string;
  custId: string;
  custName: string;
  assignmentDate: string;
  action: string;
}

const LOCKER_DATA: LockerElement[] = [
  { position: 1, lockerNo: 'L001', custId: 'C123', custName: 'John Doe', assignmentDate: '2024-02-15', action: 'View' },
  { position: 2, lockerNo: 'L002', custId: 'C124', custName: 'Jane Smith', assignmentDate: '2024-02-10', action: 'View' },
  { position: 3, lockerNo: 'L003', custId: 'C125', custName: 'Alice Johnson', assignmentDate: '2024-02-05', action: 'View' },
  { position: 4, lockerNo: 'L004', custId: 'C126', custName: 'Bob Williams', assignmentDate: '2024-02-01', action: 'View' },
  { position: 5, lockerNo: 'L005', custId: 'C127', custName: 'Charlie Brown', assignmentDate: '2024-01-28', action: 'View' },
  { position: 6, lockerNo: 'L006', custId: 'C128', custName: 'Emily Davis', assignmentDate: '2024-01-25', action: 'View' },
  { position: 7, lockerNo: 'L007', custId: 'C129', custName: 'Michael Scott', assignmentDate: '2024-01-20', action: 'View' },
  { position: 8, lockerNo: 'L008', custId: 'C130', custName: 'Sarah Lee', assignmentDate: '2024-01-15', action: 'View' },
];


@Component({
  selector: 'app-reserved-lockers',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './reserved-lockers.component.html',
  styleUrl: './reserved-lockers.component.scss'
})
export class ReservedLockersComponent {

  isloading = false;

  constructor(private router: Router) { }

  displayedColumns: string[] = ['position', 'lockerNo', 'custId', 'custName', 'assignmentDate', 'action'];
  dataSource = new MatTableDataSource(LOCKER_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  bookLocker(element: any) {
    const confirmation = confirm(`Are you sure you want to book Locker No.: ${element.lockerNo} for Customer ID: ${element.custId}?`);

    if (confirmation) {
      alert(`Locker No.: ${element.lockerNo} successfully booked for Customer ID: ${element.custId}`);

      // Remove booked row from table and reassign serial numbers
      this.dataSource.data = this.dataSource.data
        .filter(item => item.lockerNo !== element.lockerNo)
        .map((item, index) => ({ ...item, position: index + 1 })); // Reset serial numbers
    }
  }

  removeLocker(element: LockerElement) {
    this.dataSource.data = this.dataSource.data.filter(item => item.lockerNo !== element.lockerNo);
  }


  goBack() {
    this.router.navigate(['/master/product/addProduct']);
  }

}
