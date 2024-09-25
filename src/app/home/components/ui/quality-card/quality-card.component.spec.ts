import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityCardComponent } from './quality-card.component';

describe('QualityCardComponent', () => {
  let component: QualityCardComponent;
  let fixture: ComponentFixture<QualityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QualityCardComponent]
    });
    fixture = TestBed.createComponent(QualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
