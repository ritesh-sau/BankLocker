import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-remarks-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './remarks-dialog.component.html',
  styleUrl: './remarks-dialog.component.scss'
})
export class RemarksDialogComponent {
  remarks: string = '';
  action: any;
  isloading = false;
  validationMessage: string = '';
  isSuccess : boolean = false;
  countOfVisit: any;

  constructor(
    public dialogRef: MatDialogRef<RemarksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lockerNo: string; custName: string; actionType: any , totalVisit: any}
  ) {
    this.action = data.actionType;
    this.countOfVisit = data.totalVisit;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitRemarks(): void {
    console.log(`Remarks for Locker ${this.data.lockerNo}: ${this.remarks}`);
    this.dialogRef.close('submitted');
  }

  performFaceRecognition(): void {
    this.isloading = true; // Show loading spinner
    this.isSuccess = false;
    this.validationMessage = 'Face Recognition validation in progress....';

    // Simulate API call or processing delay
    setTimeout(() => {
      this.isloading = false; 
      this.isSuccess = true;
      this.countOfVisit+=1;
      //this.closeDialogcickonOk()
      //this.dialogRef.close({ success: true });
    }, 2000);
  }

  bioMatric(): void {
    this.validationMessage = 'Biomatric validation in progress....';
    this.isloading = true; // Show loading spinner
    this.isSuccess = false;
    

    // Simulate API call or processing delay
    setTimeout(() => {
      this.isloading = false; 
      this.isSuccess = true;
      this.countOfVisit+=1;
    }, 2000);
  }

  closeDialogcickonOk(){
    this.dialogRef.close({ success: true });
  }
}
