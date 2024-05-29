import { Component } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrl: './stat-cards.component.scss'
})
export class StatCardsComponent {
  schoolCount: any;

  constructor (private _schoolService: SchoolService) {
    this._schoolService.getSchoolCount().subscribe(data => {
      console.log(data)
      this.schoolCount = data
    })
  }

}
