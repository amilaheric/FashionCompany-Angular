import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListCustomersComponent } from './Customers/list-customers/list-customers.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AddCustomersComponent } from './Customers/add-customers/add-customers.component';
import { DetailsCustomersComponent } from './Customers/details-customers/details-customers.component';
import { EditCustomersComponent } from './Customers/edit-customers/edit-customers.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsCustomersComponent,
    ListCustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent,
  
      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   
     RouterModule.forRoot([
        { path: 'ListCustomers', component: ListCustomersComponent},])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
