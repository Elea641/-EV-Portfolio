import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDataComponent } from './quality-data.component';

describe('QualityDataComponent', () => {
  let component: QualityDataComponent;
  let fixture: ComponentFixture<QualityDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QualityDataComponent],
    });
    fixture = TestBed.createComponent(QualityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
