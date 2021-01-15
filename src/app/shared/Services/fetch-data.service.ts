import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private https: HttpClient) {}

    httpOptions={
      headers: new HttpHeaders({'content-Type' : 'application/json'})
    };

    dataUrl='assets/Birds.json'

    fetchBirds() : Observable<any>{
      return this.https.get(this.dataUrl,this.httpOptions);
    }



   
}
