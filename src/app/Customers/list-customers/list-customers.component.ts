import { Component, OnInit } from '@angular/core';
import {  CustomerListVM,CustomerRow } from '../models/CustomerListVM';
import{HttpClient} from '@angular/common/http';
import { MyConfig } from 'src/app/MyConfig';
import { CustomerDetailVM } from '../models/CustomerDetailVM';
import {CustomerEditVM} from '../models/CustomerEditVM';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/service/alertify.service';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal, private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getData();
 
  }

CustomerList:CustomerListVM=null;
apiResult: any=[];
CustomerDetail:any;
CustomerEdit:any;
adresa:any[];

getData(){
  this.http.get<CustomerListVM>(MyConfig.addressServer+'api/customer/customerlist').subscribe((result)=>{    
    this.apiResult = result;
  })
}

delete(c: CustomerRow ){
this.http.get(MyConfig.addressServer+'api/customer/Delete?CustomerID='+c.customerID).subscribe((result)=>{
  let indexOf= this. apiResult.indexOf(c);
  this.apiResult.splice(indexOf,1);
  this.alertify.error("Deleted successfully!");
});  
}

details(c: CustomerRow) {
  this.http.get<CustomerDetailVM>(MyConfig.addressServer + 'api/customer/details?CustomerID=' + c.customerID).subscribe((result) => {
    this.CustomerDetail = result;
  });
}

edit(c: CustomerRow) {
  this.http.get<any>(MyConfig.addressServer + 'api/customer/edit?CustomerID=' + c.customerID).subscribe((result) => {
    this.CustomerEdit = result;
  });
}


closeModal: string;
triggerModal(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
    this.closeModal = `Closed with: ${res}`;
  }, (res) => {
    this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
  });
}


private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
 }
}

