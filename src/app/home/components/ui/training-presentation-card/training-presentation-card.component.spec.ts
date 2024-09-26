import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPresentationCardComponent } from './training-presentation-card.component';

describe('TrainingPresentationCardComponent', () => {
  let component: TrainingPresentationCardComponent;
  let fixture: ComponentFixture<TrainingPresentationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrainingPresentationCardComponent]
    });
    fixture = TestBed.createComponent(TrainingPresentationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
