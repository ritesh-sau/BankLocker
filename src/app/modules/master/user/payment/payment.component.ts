import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  
  constructor(
     private router: Router
  ){}

  selectedPaymentMethod: string = 'card';
  cardDetails = { number: '', expiry: '', cvv: '', name: '' };
  upiId: string = '';
  selectedBank: string = 'HDFC';

  banks = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'];

  submitPayment() {
    console.log('Payment Method:', this.selectedPaymentMethod);
    if (this.selectedPaymentMethod === 'card') {
      console.log('Card Details:', this.cardDetails);
    } else if (this.selectedPaymentMethod === 'upi') {
      console.log('UPI ID:', this.upiId);
    } else if (this.selectedPaymentMethod === 'netbanking') {
      console.log('Bank:', this.selectedBank);
    }
    alert('Payment Submitted!');
  }

  cancelPayment(){
    this.router.navigate(['/user-access']);
  }
}
