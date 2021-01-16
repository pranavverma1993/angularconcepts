import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/Services/auth.service';
import { DataserviceService } from '../shared/Services/dataservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private service : AuthService,private router: Router ,private dataservice : DataserviceService) { }

  ngOnInit(): void {
  }
  goBackToLogin(){
    this.router.navigateByUrl("/login")
  }
  get data() { 
    return this.dataservice.serviceData; 
  } 
}
