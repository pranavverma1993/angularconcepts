import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SaveEmployeeDetails } from '../shared/Entity/employee';
import { AuthService } from '../shared/Services/auth.service';
import { FetchDataService } from '../shared/Services/fetch-data.service';
import { GetEmployeeDetails } from '../shared/Entity/employee';
import { GetEmployeeDetailsOP } from '../shared/Entity/employee';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(public service : FetchDataService,private router : Router,private authService : AuthService) { }
  
  saveEmployeeDetails=new SaveEmployeeDetails();
  getEmployeeDetails = new GetEmployeeDetails();
  firstName : String;
  lastName : String;
  userId:Number;
  getEmployeeDetailsOPList = new Array<GetEmployeeDetailsOP>();


  showData:Boolean=false;
  logout(){
     this.authService.logout()
    }

    gotoadmin(){
      this.router.navigateByUrl("/admin")
    }
  ngOnInit(): void {
    
  }

 
  saveEmployee(){
    
    this.service.saveEmployee(this.saveEmployeeDetails).subscribe(
      data => {
        if (data.responseCode === 0) {
          alert("saved success");
        }
        },
         error => console.error(error)
)

  }
 

  getEmployee(){
    this.service.fetchEmployee(this.getEmployeeDetails).subscribe(
      data => {
        if (data.responseCode === 0) {
          this.getEmployeeDetailsOPList = data.response;
          console.log(this.getEmployeeDetailsOPList + "PV")
        }
        },
         error => console.error(error)
)
  }






}
