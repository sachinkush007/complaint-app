import { Component } from '@angular/core';
import { AddressDetailsService } from '../services/address-details.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
})
export class AddressDetailsComponent {
  addressDetails = {
    customerName: '',
    panNumber: '',
    aadhaarNumber: '',
    city: '',
    pinCode: '',
    status: 'ACTIVE',  // Default selected value
  };

  constructor(private addressDetailsService: AddressDetailsService) {}

  onSubmit() {
    if (this.addressDetails.customerName && this.addressDetails.panNumber && this.addressDetails.aadhaarNumber && this.addressDetails.city && this.addressDetails.pinCode && this.addressDetails.status) {
      this.addressDetailsService.addAddressDetails(this.addressDetails).subscribe(
        (response) => {
          console.log('Address details added:', response);
          // Optionally, reset the form or show a success message
        },
        (error) => {
          console.error('Error adding address details:', error);
        }
      );
    }
  }
}
