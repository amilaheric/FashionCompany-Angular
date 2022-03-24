import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MyConfig } from 'src/app/MyConfig';
import { CustomerAddVM } from '../models/CustomerAddVM';
import { NgModel } from '@angular/forms';
import { AlertifyService } from 'src/app/service/alertify.service';
@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  constructor(private http:HttpClient, private alertify:AlertifyService) { }

  @Input()
  SelectListAddr: any[];
  SelectListGe: any[];

  ngOnInit(): void {
   this.add();
  }


  addCustomer = {
    firstName: '',
    lastName: '',
    birthDate:'',
    phoneNumber: '',
    customerID: 0,
    username: '',
    email: '',
    genderID:'',
    addressID:'',
  };
  customeradd1: CustomerAddVM = {
    firstName: '',
    lastName: '',
    customerID: 0,
    username: '',
    phoneNumber: '',
    email: '',
    genderID:'',
    addressID:'',
    birthDate:'' ,
  };

  saveCustomer(): void {
   this.customeradd1 = {
      firstName: this.addCustomer.firstName,
      lastName: this.addCustomer.lastName,
      customerID: this.addCustomer.customerID,
      username: this.addCustomer.username,
      phoneNumber: this.addCustomer.phoneNumber,
      email: this.addCustomer.email,
      addressID: this.addCustomer.addressID,
      genderID: this.addCustomer.genderID,
      birthDate: this.addCustomer.birthDate,
 
  
    };
    this.customeradd1.addressID=this.addCustomer.addressID;
  
   this.http.post(MyConfig.addressServer+'api/customer/AddSave',this.customeradd1,MyConfig.httpOption).subscribe((result)=>{
    });
    this.alertify.success("Added successfully!")
}

selectAddress(event: any) {
  if(this.customeradd1!=undefined)
    this.customeradd1.addressID = event.value;
}

selectGender(event: any) {
    if(this.customeradd1!=undefined)
      this.customeradd1.genderID = event.value;
  }
  
add(){
 this.http.get<any>(MyConfig.addressServer+'api/customer/AddCustomer').subscribe((result)=>{
    this.SelectListAddr=result.address;
    this.SelectListGe=result.gender;
     
  });

 }
}
