import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const configUrl = 'https://backend-carbon.herokuapp.com/questions';
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
  withCredentials: true
};

@Component({
  selector: 'app-liste-ecole',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  nb1: boolean;
  nb2: boolean;
  nb3: boolean;
  nb4: boolean;
  nb5: boolean;
  quiz :any;

  score =0 ;
  constructor(private http: HttpClient) {
    this.nb1 = true;
    this.nb2 = false;
    this.nb3 = false;
    this.nb4 = false;
    this.nb5 = false;
    
  }

  scoreCalcul(ss: any) {
    if( this.nb1 ==true){
      this.nb1 =false;
      this.nb2 = true;
    }else if(this.nb2 ==true){
      this.nb2 = false;
      this.nb3 = true;
    }else if(this.nb3 ==true){
      this.nb3 = false;
      this.nb4 = true;
    }else if(this.nb4 ==true){
      this.nb4 = false;
      this.nb5 = true;
    }

    if(ss.type == 1){
      this.score=this.score+100;
    }
  }

  ngOnInit(): void {
    this.http.get(configUrl, optionRequete).subscribe(data => {
     this.quiz=data;
    });

  }

}
