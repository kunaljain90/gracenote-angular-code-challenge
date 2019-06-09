import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsCountrySummaryComponent } from './medals-country-summary.component';

describe('MedalsCountrySummaryComponent', () => {
  let component: MedalsCountrySummaryComponent;
  let fixture: ComponentFixture<MedalsCountrySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsCountrySummaryComponent ]
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
});
