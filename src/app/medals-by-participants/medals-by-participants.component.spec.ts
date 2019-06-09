import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsByParticipantsComponent } from './medals-by-participants.component';

describe('MedalsByParticipantsComponent', () => {
  let component: MedalsByParticipantsComponent;
  let fixture: ComponentFixture<MedalsByParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsByParticipantsComponent ]
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
