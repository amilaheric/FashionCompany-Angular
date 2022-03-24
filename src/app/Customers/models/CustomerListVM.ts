export class CustomerRow{
  customerID: number;
  firstName: string;
  lastName: string;
  address: string;
  addressID: number;
  userName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  genderID: number;
  gender: string;
}


export class CustomerListVM{
  list: CustomerRow[];
 
;}
