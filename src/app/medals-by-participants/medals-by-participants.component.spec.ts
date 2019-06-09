import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsByParticipantsComponent } from './medals-by-participants.component';
import { of } from 'rxjs';
import { MedalService } from '../medal.service';

class MockMedalService {

  getMedalsByParticipants () {
    return of([]);
  }
}


describe('MedalsByParticipantsComponent', () => {
  let component: MedalsByParticipantsComponent;
  let fixture: ComponentFixture<MedalsByParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsByParticipantsComponent ],
      providers: [
        { provide: MedalService, useClass: MockMedalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsByParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
