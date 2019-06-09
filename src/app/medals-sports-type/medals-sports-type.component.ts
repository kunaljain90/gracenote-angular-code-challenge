import { Component, OnInit } from '@angular/core';
import { MedalService, MedalsBySportsType } from '../medal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medals-sports-type',
  templateUrl: './medals-sports-type.component.html',
  styleUrls: ['./medals-sports-type.component.scss']
})
export class MedalsSportsTypeComponent implements OnInit {

  sportsType$: Observable<MedalsBySportsType[]>;
  
  constructor(private medalService: MedalService) { }

  ngOnInit() {
    this.sportsType$ = this.medalService.getSportsList();
    this.medalService.getMedalsByParticipants().subscribe( x => console.log(x));
  }

}
