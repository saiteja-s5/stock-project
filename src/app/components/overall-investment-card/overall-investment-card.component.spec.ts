import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallInvestmentCardComponent } from './overall-investment-card.component';

describe('OverallInvestmentCardComponent', () => {
  let component: OverallInvestmentCardComponent;
  let fixture: ComponentFixture<OverallInvestmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallInvestmentCardComponent]
    });
    fixture = TestBed.createComponent(OverallInvestmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
