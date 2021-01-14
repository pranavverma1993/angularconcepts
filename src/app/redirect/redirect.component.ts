import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/Services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private service : AuthService) { }
  logout(){
    this.service.logout()
    }
  ngOnInit(): void {
  }

}
