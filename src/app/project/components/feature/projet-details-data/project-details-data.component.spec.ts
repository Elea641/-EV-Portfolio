import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDetailsDataComponent } from './project-details-data.component';

describe('ProjetDataComponent', () => {
  let component: ProjetDetailsDataComponent;
  let fixture: ComponentFixture<ProjetDetailsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjetDetailsDataComponent]
    });
    fixture = TestBed.createComponent(ProjetDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
