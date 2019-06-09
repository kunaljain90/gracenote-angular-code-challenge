import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MedalsSportsTypeComponent } from './medals-sports-type.component';
import { MedalService } from '../medal.service';
import { of } from 'rxjs';
import { MedalsBySportsType } from '../models/medals-by-sports-type';

class MockMedalService {
  getSportsList () {
    return of([{
      id: 1,
      name: 'speed skating',
      total: 5,
      gold: 3,
      silver: 1,
      bronze: 1,
    } as MedalsBySportsType]);
  }

  getMedalsByParticipants () {
    return of([]);
  }
}

describe('MedalsSportsTypeComponent', () => {
  let component: MedalsSportsTypeComponent;
  let fixture: ComponentFixture<MedalsSportsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsSportsTypeComponent ],
      providers: [
        { provide: MedalService, useClass: MockMedalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsSportsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render sports type summary', () => {
    const fixture = TestBed.createComponent(MedalsSportsTypeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.medal-sports-type').tBodies.length).toBe(1);
  });
});
