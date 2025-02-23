import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-remarks-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule, MatFormFieldModule],
  templateUrl: './remarks-dialog.component.html',
  styleUrl: './remarks-dialog.component.scss'
})
export class RemarksDialogComponent {

  remarks: string = '';

  constructor(
    public dialogRef: MatDialogRef<RemarksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lockerNo: string; custName: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitRemarks(): void {
    console.log(`Remarks for Locker ${this.data.lockerNo}: ${this.remarks}`);
    //this.dialogRef.close(this.remarks);
    this.dialogRef.close('submitted');
  }
}
