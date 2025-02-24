import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  
  constructor(private router: Router) {}

  selectedPaymentMethod: string = '';
  isFormValid: boolean = false;

  cardDetails = { number: '', expiry: '', cvv: '', name: '' };
  upiId: string = '';
  selectedBank: string = '';
  banks = ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank"];

  validateForm() {
    if (this.selectedPaymentMethod === 'card') {
      this.isFormValid =
        /^\d{16}$/.test(this.cardDetails.number.replace(/\D/g, '')) && // Ensure only 16 digits
        /^\d{2}\/\d{2}$/.test(this.cardDetails.expiry) && // Format MM/YY
        /^\d{3}$/.test(this.cardDetails.cvv) && // Exactly 3 digits
        this.cardDetails.name.trim().length > 0; // Non-empty name
    } else if (this.selectedPaymentMethod === 'upi') {
      this.isFormValid = this.upiId.includes('@');
    } else if (this.selectedPaymentMethod === 'netbanking') {
      this.isFormValid = this.selectedBank.trim().length > 0;
    } else {
      this.isFormValid = false;
    }
  }

  submitPayment() {
    if (this.isFormValid) {
      alert('Payment Done Successful!');
      this.router.navigate(['/user-access']);
    }
  }

  cancelPayment() {
    this.selectedPaymentMethod = '';
    this.isFormValid = false;
    this.router.navigate(['/user-access']);
  }
}
