import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public fetchBands(): Observable<any> {
    let dataObservable: Observable<any> = this.httpClient.get(
      "http://localhost:3000/bands"
    );
    return dataObservable;
  }
}
