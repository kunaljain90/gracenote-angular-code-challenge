import { Component, OnInit, ViewChild } from '@angular/core';
import { MedalService } from '../medal.service';
import { Observable } from 'rxjs';
import { MedalSummary } from '../models/medal-summary';

@Component({
  selector: 'app-medals-country-summary',
  templateUrl: './medals-country-summary.component.html',
  styleUrls: ['./medals-country-summary.component.scss']
})
export class MedalsCountrySummaryComponent implements OnInit {

  medalSummary$: Observable<MedalSummary[]>;
  
  constructor(private medalService: MedalService) { }

  ngOnInit() {
    this.medalSummary$ = this.medalService.getSummaryByCountry();
  }
}