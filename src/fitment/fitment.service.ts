import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitmentService {
  constructor(private http: HttpClient) {}

  getData(url: string, paramsVal: any) {
    if (paramsVal) {
      let params = new HttpParams();
      params = params.append(paramsVal.key, paramsVal.value);
      return this.http.get(url, { params: params });
    } else {
      return this.http.get(url);
    }
  }
}
