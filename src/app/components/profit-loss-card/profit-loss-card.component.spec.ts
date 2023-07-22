import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossCardComponent } from './profit-loss-card.component';

describe('ProfitLossCardComponent', () => {
  let component: ProfitLossCardComponent;
  let fixture: ComponentFixture<ProfitLossCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitLossCardComponent]
    });
    fixture = TestBed.createComponent(ProfitLossCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
