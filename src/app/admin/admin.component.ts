import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private service : AuthService,private router : Router,public translate: TranslateService) {
    translate.addLangs(['English', 'French', 'German']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|French | German/) ? browserLang : 'English');


   }
  logout(){
    this.service.logout()
    }
}
