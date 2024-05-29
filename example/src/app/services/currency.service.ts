import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private _http: HttpClient) {}
  private _currencyUrl: string =
    'https://bankofgeorgia.ge/api/currencies/history/';

  // შევქმნათ ფუნქცია რომელიც დაგვიბრუნებს ჩვენს მონაცემმებს
  // რომელიც წამოვა ბექიდან
  getCurrencies() {
    // მოცემულმა ფუნქციამ შედეგი რომ დამიბურნოს
    // გვესაჭირეობა return
    // .get ფუნქცია საჭიროებს ლინკს საიდანაც უნდა წამოიღოს
    return this._http.get(this._currencyUrl);
  }
  
}
