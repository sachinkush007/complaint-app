import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { TicketService } from './ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddressDetailsService } from './services/address-details.service';
import { ContactDetailsService } from './services/contact-details.service';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    AddressDetailsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TicketService,
    AddressDetailsService,
    ContactDetailsService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
