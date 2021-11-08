import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class RequestServices {
  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }
  // private _http: Http,
  public postRequest(url: any, body: any): Observable<any> {
    return this.http.post(this.global.settings.API_URL + url, body);
  }
  public getRequest(URL: any): Observable<any> {
    return this.http.get(this.global.settings.API_URL + URL);
  }

}
