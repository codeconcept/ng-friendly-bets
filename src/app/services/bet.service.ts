import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BetService {
  constructor(private httpClient: HttpClient) {}

  getBets(): Observable<any> {
    return this.httpClient
      .get("http://localhost:8080/server/data.json");

  }
}
