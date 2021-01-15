import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { FetchDataService } from 'src/app/shared/Services/fetch-data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  items=[];
  searchText:any;
  constructor(private service : AuthService,private router : Router,private fetchDataService : FetchDataService) { }
  logout(){
    this.service.logout()
    }
  ngOnInit() {
    this.getData();
  }

getData(){
this.fetchDataService.fetchBirds().subscribe(data => {
this.items=data;
})

}



}
