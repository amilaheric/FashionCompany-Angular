import { HttpHeaders } from "@angular/common/http";

export class MyConfig{
  static addressServer:string ='https://localhost:44318/';
  static httpOption={
    headers:new HttpHeaders({
      "Content-Type":"application/json"
    })
  };
}
