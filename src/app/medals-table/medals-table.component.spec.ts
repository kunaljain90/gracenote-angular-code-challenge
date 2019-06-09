import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsTableComponent } from './medals-table.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medals-country-summary',
  template: '<p>Mock Product Editor Component</p>'
})
class MockAppMedalsCountrySummaryComponent {}

@Component({
  selector: 'app-medals-sports-type',
  template: '<p>Mock Sports Type/p>'
})
class MockAppMedalsSportsTypeComponent {}

@Component({
  selector: 'app-medals-by-participants',
  template: '<p>Mock Participants</p>'
})
class MockAppMedalsParticipantsComponent {}

describe('MedalsTableComponent', () => {
  let component: MedalsTableComponent;
  let fixture: ComponentFixture<MedalsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [MedalsTableComponent,
        MockAppMedalsCountrySummaryComponent,
        MockAppMedalsSportsTypeComponent,
        MockAppMedalsParticipantsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain medal summary', () => {
    const fixture = TestBed.createComponent(MedalsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-medals-country-summary')).toBeTruthy();
  });

  it('should contain sports type summary', () => {
    const fixture = TestBed.createComponent(MedalsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-medals-sports-type')).toBeTruthy();
  });

  it('should contain medals by participants', () => {
    const fixture = TestBed.createComponent(MedalsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-medals-by-participants')).toBeTruthy();
  });
});
