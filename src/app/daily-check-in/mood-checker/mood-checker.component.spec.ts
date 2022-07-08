import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodCheckerComponent } from './mood-checker.component';

describe('MoodCheckerComponent', () => {
  let component: MoodCheckerComponent;
  let fixture: ComponentFixture<MoodCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
