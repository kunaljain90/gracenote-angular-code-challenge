import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsTableComponent } from './medals-table.component';

describe('MedalsTableComponent', () => {
  let component: MedalsTableComponent;
  let fixture: ComponentFixture<MedalsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsTableComponent ]
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
});
