import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MyConfig } from 'src/app/MyConfig';
import { AlertifyService } from 'src/app/service/alertify.service';


@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  @Input()
  editCustomer:any;
  addressselect: any;
  genderselect:any;
  constructor(private http: HttpClient, private alertify:AlertifyService) { }

  ngOnInit(): void {
   this.add();
  }

  selectAddress(event: any) {
      if(this.editCustomer!=undefined)
         this.editCustomer.addressID = event.value;
    }
    
  selectGender(event: any) {
      if(this.editCustomer!=undefined)
         this.editCustomer.genderID = event.value;
      }

  add() {
        this.http.get<any>(MyConfig.addressServer+'api/customer/AddCustomer').subscribe((result)=>{
           this.addressselect=result.address;
           this.genderselect=result.gender;
         });
       }
      
  saveCustomer() {
    console.log(this.editCustomer);
    this.http.post(MyConfig.addressServer+'api/customer/SaveEdit',this.editCustomer,MyConfig.httpOption).subscribe((result)=>{
      window.location.reload();
      this.alertify.warning("Edited successfully!");
    });
  }
}
