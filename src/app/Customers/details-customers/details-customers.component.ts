import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetailVM } from '../models/CustomerDetailVM';




@Component({
  selector: 'app-details-customers',
  templateUrl: './details-customers.component.html',
  styleUrls: ['./details-customers.component.css']
})
export class DetailsCustomersComponent implements OnInit {

@Input()

customer: any;
  CID!: number;
  constructor(private http:HttpClient, private route:ActivatedRoute  ) { 
    
  }

  ngOnInit(): void {
   
  }


}
