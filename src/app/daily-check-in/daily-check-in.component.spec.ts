import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCheckInComponent } from './daily-check-in.component';

describe('DailyCheckInComponent', () => {
  let component: DailyCheckInComponent;
  let fixture: ComponentFixture<DailyCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCheckInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
