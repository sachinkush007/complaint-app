import { Component } from '@angular/core';
import { ContactDetailsService } from '../services/contact-details.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  constructor(private contactDetailsService: ContactDetailsService) {}

  contactDetails = {
    contact: '',
    contactType: '',
    status: 'ACTIVE'
  };

  // Validate contact (either valid mobile or valid email)
  isValidContact(value: string): boolean {
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mobilePattern.test(value) || emailPattern.test(value);
  }


  onSubmit() {
    if (this.contactDetails.contact && this.contactDetails.contactType && this.contactDetails.status) {
      this.contactDetailsService.addContactDetails(this.contactDetails).subscribe(
        (response) => {
          console.log('Contact details added:', response);
          // Optionally, reset the form or show a success message
        },
        (error) => {
          console.error('Error adding contact details:', error);
        }
      );
    }
  }
}
