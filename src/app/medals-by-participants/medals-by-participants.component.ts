import { Component, OnInit } from '@angular/core';
import { MedalService } from '../medal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medals-by-participants',
  templateUrl: './medals-by-participants.component.html',
  styleUrls: ['./medals-by-participants.component.scss']
})
export class MedalsByParticipantsComponent implements OnInit {

  medalsBySports$: Observable<any[]>

  constructor(private medalService: MedalService) { }

  ngOnInit() {
   this.medalsBySports$ = this.medalService.getMedalsByParticipants();
  }

}
