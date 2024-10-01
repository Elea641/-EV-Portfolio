import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModalComponent } from './training-modal.component';

describe('TrainingModalComponent', () => {
  let component: TrainingModalComponent;
  let fixture: ComponentFixture<TrainingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrainingModalComponent],
    });
    fixture = TestBed.createComponent(TrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
