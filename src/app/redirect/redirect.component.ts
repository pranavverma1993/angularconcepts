import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/Services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private service : AuthService,private router : Router) { }
  logout(){
    this.service.logout()
    }

    gotoadmin(){
      this.router.navigateByUrl("/admin")
    }
  ngOnInit(): void {
  }

}
