import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private _http: HttpClient) {}
  private _schoolCount: string = "http://localhost:3000/proxy?targetUrl=https://skolebi.emis.ge/back/school/generaldata"

  getSchoolCount() {
    return this._http.get(this._schoolCount);
  }
}
