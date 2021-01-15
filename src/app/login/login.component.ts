import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,Validators, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string;
  showerror:boolean=false;
  selectedField = "";
  
  @ViewChild('username', {static: true}) nameElementRef:ElementRef
  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
  constructor(private router : Router, private service : AuthService,public translate: TranslateService) {

    translate.addLangs(['English', 'French', 'German']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|French | German/) ? browserLang : 'English');

   }
  profileForm:FormGroup
  ngOnInit() {
  this.profileForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
  lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
});

  }
  goToRedirect(username: string, password : string)
  {
      var output = this.service.checkusernameandpassword(username, password);
      if(output == true)
      {
        this.router.navigateByUrl("/redirect");
      }
      else{
        this.showerror=true;
        
      
      }
}

}
