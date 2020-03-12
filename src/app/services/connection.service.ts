import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor( private http: HttpClient) { }

  url = 'https://localhost:44325/weatherforecast'; 
  getData() {
    return this.http.get(this.url);
  }

}
