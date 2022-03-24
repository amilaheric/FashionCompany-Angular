import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomersComponent} from "./Customers/list-customers/list-customers.component";
import { AddCustomersComponent } from './Customers/add-customers/add-customers.component';
import { DetailsCustomersComponent } from './Customers/details-customers/details-customers.component';
import { EditCustomersComponent } from './Customers/edit-customers/edit-customers.component';


const routes:Routes=[
  {path:'',component:ListCustomersComponent},
{path:'add',component:AddCustomersComponent},
{path:'details',component:DetailsCustomersComponent},
{path:'edit',component:EditCustomersComponent},



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
