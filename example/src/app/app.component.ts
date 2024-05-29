import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'api';
  currencies: any;
  constructor(private _currencyService: CurrencyService) {
    this._currencyService.getCurrencies().subscribe((data => {
      console.log(data);
      this.currencies = data;
    }))
  }
}
