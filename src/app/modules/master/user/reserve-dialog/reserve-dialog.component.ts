import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngIf
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // ✅ Required for <mat-input>
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-dialog',
  standalone: true,
  imports: [
    CommonModule,      // ✅ Required for *ngIf
    MatDialogModule,
    FormsModule,       // ✅ Required for [(ngModel)]
    MatFormFieldModule,
    MatInputModule     // ✅ Required for Material Input
  ],
  templateUrl: './reserve-dialog.component.html',
  styleUrl: './reserve-dialog.component.scss'
})
export class ReserveDialogComponent {

  remarks: string = '';
  isCustIdvalid!: boolean;
  customerId: string = '';
  accountNo : string = '';

  constructor(
    public dialogRef: MatDialogRef<ReserveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      lockerId: string;
      customerId: string;
      custName: string;
      accountNo: string;
    },
    private router: Router
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  validCustIds: string[] = ['456789123', '567891234 ', '678912345'];

  checkCustId(event: Event) {
    const custId = (event.target as HTMLInputElement).value;
    if (!custId) {
      return;
    }
    console.log(custId);
    this.isCustIdvalid = this.validCustIds.includes(custId);
  }

  submitRemarks(): void {
    this.dialogRef.close('submitted');
    this.router.navigate(['/payment']);
  }

}
