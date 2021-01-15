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
  states= []; cities = [];
  countries=[];
  searchText:any;
  constructor(private service : AuthService,private router : Router,private fetchDataService : FetchDataService) { }
  logout(){
    this.service.logout()
    }
  ngOnInit() {
    this.getData();
    this.getCountries();
  }

getData(){
this.fetchDataService.fetchBirds().subscribe(data => {
this.items=data;
},
 error => console.error(error)
)

}

getCountries(){
  this.fetchDataService.fetchCountry().subscribe(data => {
  this.countries=data;
  console.log(this.countries);
  },
   error => console.error(error)
  )
  
  }


  countryChange(e){
    console.log(e.target.value)
    this.countries.filter(element => {
      if(element.country == e.target.value){
        console.log(element.states[0],"first state")
        this.states = element.states;
      }
    });
    this.cities = []
  }


  statesChange(evt){
    console.log(evt.target.value,this.states)
    this.states.filter( element =>{
      if(element.name == evt.target.value){
        this.cities = element.cities;
      }
    })
  }

}
