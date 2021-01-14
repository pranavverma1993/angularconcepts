import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private routes: Router) { }
  checkusernameandpassword(username: string, password : string)
  {
if(username == "admin" && password =="admin"){
sessionStorage.setItem('username',"pranav");

return true;
}
else{
  return false;
}
  }

logout(){
  sessionStorage.removeItem("username");
  this.routes.navigateByUrl("/login");
}
}
