import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCheckInsComponent } from './history-check-ins.component';

describe('HistoryCheckInsComponent', () => {
  let component: HistoryCheckInsComponent;
  let fixture: ComponentFixture<HistoryCheckInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCheckInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCheckInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
