import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProjectComponent } from './carousel-project.component';

describe('CarouselProjectComponent', () => {
  let component: CarouselProjectComponent;
  let fixture: ComponentFixture<CarouselProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselProjectComponent],
    });
    fixture = TestBed.createComponent(CarouselProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
