import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { RemarksDialogComponent } from '../remarks-dialog/remarks-dialog.component';

export interface LockerElement {
  position: number;
  lockerNo: string;
  custId: string;
  custName: string;
  assignmentDate: string;
  lastVisit: string;
  totalVisit: number;
  action: string;
}

const LOCKER_DATA: LockerElement[] = [
  { position: 1, lockerNo: 'L001', custId: 'C123', custName: 'John Doe', assignmentDate: '2024-02-15', lastVisit: '2024-02-20', totalVisit: 5, action: 'View' },
  { position: 2, lockerNo: 'L002', custId: 'C124', custName: 'Jane Smith', assignmentDate: '2024-02-10', lastVisit: '2024-02-18', totalVisit: 3, action: 'View' },
  { position: 3, lockerNo: 'L003', custId: 'C125', custName: 'Alice Johnson', assignmentDate: '2024-02-05', lastVisit: '2024-02-17', totalVisit: 7, action: 'View' },
  { position: 4, lockerNo: 'L004', custId: 'C126', custName: 'Bob Williams', assignmentDate: '2024-02-01', lastVisit: '2024-02-16', totalVisit: 6, action: 'View' },
  { position: 5, lockerNo: 'L005', custId: 'C127', custName: 'Charlie Brown', assignmentDate: '2024-01-28', lastVisit: '2024-02-14', totalVisit: 4, action: 'View' },
  { position: 6, lockerNo: 'L006', custId: 'C128', custName: 'Emily Davis', assignmentDate: '2024-01-25', lastVisit: '2024-02-12', totalVisit: 8, action: 'View' },
  { position: 7, lockerNo: 'L007', custId: 'C129', custName: 'Michael Scott', assignmentDate: '2024-01-20', lastVisit: '2024-02-10', totalVisit: 10, action: 'View' },
  { position: 8, lockerNo: 'L008', custId: 'C130', custName: 'Sarah Lee', assignmentDate: '2024-01-15', lastVisit: '2024-02-08', totalVisit: 9, action: 'View' },
  { position: 9, lockerNo: 'L009', custId: 'C131', custName: 'David Johnson', assignmentDate: '2024-01-10', lastVisit: '2024-02-06', totalVisit: 6, action: 'View' },
  { position: 10, lockerNo: 'L010', custId: 'C132', custName: 'Olivia Martinez', assignmentDate: '2024-01-05', lastVisit: '2024-02-04', totalVisit: 7, action: 'View' }
];

@Component({
  selector: 'app-branch-booked',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './branch-booked.component.html',
  styleUrl: './branch-booked.component.scss',
})
export class BranchBookedComponent {

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = ['position', 'lockerNo', 'custId', 'custName', 'assignmentDate', 'lastVisit', 'totalVisit', 'action'];
  dataSource = new MatTableDataSource(LOCKER_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openRemarksDialog(element: LockerElement) {
    const dialogRef = this.dialog.open(RemarksDialogComponent, {
      width: '400px',
      data: { lockerNo: element.lockerNo, custName: element.custName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'submitted') {
        this.removeLocker(element);
      }
    });
  }

  removeLocker(element: LockerElement) {
    this.dataSource.data = this.dataSource.data.filter(item => item.lockerNo !== element.lockerNo);
  }
}
