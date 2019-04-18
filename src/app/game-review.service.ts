import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Review } from './review';
import { Recommendation } from './recommendation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GameReviewService {

  url = 'http://127.0.0.1:5000';

  constructor(  private http: HttpClient) { }

  evaluateReview(review: Review): Observable<Recommendation> {
    return this.http.post<Recommendation>(this.url + '/recommend', review, httpOptions);
  }

}
