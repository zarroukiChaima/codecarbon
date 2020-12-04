import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  quiz;
  configUrl = 'https://backend-carbon.herokuapp.com/contact';
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient) { }

  /**
   * get quiz
   */
  getQuiz(){
   this.quiz= this.http.get(this.configUrl, this.optionRequete);
  }

  private createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }
  
  contactUs(data){
    const options = this.createRequestOptions();
    return this.http.post(this.configUrl, data, { headers: options });
  }
}
