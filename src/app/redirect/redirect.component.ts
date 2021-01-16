import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SaveEmployeeDetails } from '../shared/Entity/employee';
import { AuthService } from '../shared/Services/auth.service';
import { FetchDataService } from '../shared/Services/fetch-data.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(public service : FetchDataService,private router : Router) { }
  
  saveEmployeeDetails=new SaveEmployeeDetails();
  firstName : String;
  lastName : String;


  logout(){
    // this.service.logout()
    }

    gotoadmin(){
      this.router.navigateByUrl("/admin")
    }
  ngOnInit(): void {
    
  }

 
  saveEmployee(){
    console.log(this.firstName)
    this.service.saveEmployee(this.saveEmployeeDetails).subscribe(
      data => {
        if (data.responseCode === 0) {
          alert("saved success");
        }
        },
         error => console.error(error)
)
  }
 
}
