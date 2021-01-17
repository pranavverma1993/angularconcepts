import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEmployeeDetails, SaveEmployeeDetails } from '../Entity/employee';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private https: HttpClient) {}

    httpOptions={
      headers: new HttpHeaders({
        'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
        'Access-Control-Allow-Origin':'*',
        'content-Type' : 'application/json'}
      
      ),
      
    };

    dataUrl='assets/Birds.json';
    dataUrl1='assets/countries.json';
    dataUrl2='http://localhost:8080/saveUserData';
    dataUrl23='http://localhost:8080/fetchUserData'

    fetchBirds() : Observable<any>{
      return this.https.get(this.dataUrl,this.httpOptions);
    }

    fetchCountry() : Observable<any>{
      return this.https.get(this.dataUrl1,this.httpOptions);
    }

    saveEmployee(saveEmployeeDetails : SaveEmployeeDetails) : Observable<any>{
      // const body=JSON.stringify(saveEmployeeDetails);
       console.log(saveEmployeeDetails)
      return this.https.post(this.dataUrl2,saveEmployeeDetails,this.httpOptions);
    }

    fetchEmployee(getEmployeeDetails : GetEmployeeDetails) : Observable<any>{
      // const body=JSON.stringify(saveEmployeeDetails);
       
      return this.https.post(this.dataUrl23,getEmployeeDetails,this.httpOptions);
    }
   
}
