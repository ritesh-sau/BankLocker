import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { API_URLS } from './constant';
import { Jwtrequest } from '../modules/models/jwt-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host: string = environment.api_url;

  constructor( private http: HttpClient) { }


  public login(jwtrequest: Jwtrequest): Observable<HttpResponse<any>>{
    const headers = new HttpHeaders();

    headers.set('Content-Type', 'application/json')
    //headers.set('Access-Control-Allow-origion','*')

    const url = environment.api_url + API_URLS.getJwtToken;
    console.log("token url ----"+ url);

    return this.http.post<HttpResponse<any> | HttpErrorResponse>
    //(`${this.host}` + `${API_URLS.getJwtToken}`, credentials, {observe: 'response' , headers: headers });
    (url, jwtrequest, { observe: 'response' , 'headers': headers });

   
    
  }
}
