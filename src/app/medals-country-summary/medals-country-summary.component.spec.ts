import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsCountrySummaryComponent } from './medals-country-summary.component';
import { MedalService } from '../medal.service';
import { of } from 'rxjs';
import { MedalSummary } from '../models/medal-summary';

class MockMedalService {
  getSummaryByCountry() {
    return of([{
      id: 1,
      name: 'Netherlands',
      total: 20,
      gold: 5,
      silver: 10,
      bronze: 5,
    } as MedalSummary]);
  }
}

describe('MedalsCountrySummaryComponent', () => {
  let component: MedalsCountrySummaryComponent;
  let fixture: ComponentFixture<MedalsCountrySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedalsCountrySummaryComponent],
      providers: [
        { provide: MedalService, useClass: MockMedalService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsCountrySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render country wise summary', () => {
    const fixture = TestBed.createComponent(MedalsCountrySummaryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.medal-summary').tBodies.length).toBe(1);
  })
});
