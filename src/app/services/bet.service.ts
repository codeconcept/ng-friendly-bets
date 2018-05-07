import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { IBet } from "../models/bet.interface";

@Injectable({
  providedIn: "root"
})
export class BetService {
  // URL = "http://localhost:8080/server/data.json";
  URL = "http://localhost:3000/api/bets";
  constructor(private httpClient: HttpClient) {}

  getBets(): Observable<IBet[]> {
    return this.httpClient
      .get<IBet[]>(this.URL)
      .pipe(
        tap(
          data => console.log("bets ", data),
          err => console.error("error from getBets ", err)
        )
      );
  }

  saveBet(bet: IBet): Observable<IBet> {
    console.log('bet', bet);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<IBet>(this.URL, bet, httpOptions);
  }
}
