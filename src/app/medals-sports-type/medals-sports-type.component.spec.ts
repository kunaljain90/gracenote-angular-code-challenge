import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsSportsTypeComponent } from './medals-sports-type.component';

describe('MedalsSportsTypeComponent', () => {
  let component: MedalsSportsTypeComponent;
  let fixture: ComponentFixture<MedalsSportsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsSportsTypeComponent ]
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
});
