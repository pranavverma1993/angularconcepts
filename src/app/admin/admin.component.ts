import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/Services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  
  hello(){
    
  }
  ngOnInit(): void {
  }
  constructor(private service : AuthService,private router : Router) { }
  logout(){
    this.service.logout()
    }
}
