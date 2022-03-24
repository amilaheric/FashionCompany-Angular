export class Address{
         disabled: boolean;
        group?: any;
        selected: boolean;
        text: string;
        value: string;
}
export class Gender{
     disabled: boolean;
        group?: any;
        selected: boolean;
        text: string;
        value: string;
}

export class CustomerAddVM{
     customerID: number;
         firstName?: string;
        username?: string;
    phoneNumber?: string;
         lastName?: string;
         email?: string;
        genderID?:string;
        addressID?:string;
        birthDate?:string;
       

}