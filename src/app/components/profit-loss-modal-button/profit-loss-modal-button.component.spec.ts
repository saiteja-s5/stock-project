import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossModalButtonComponent } from './profit-loss-modal-button.component';

describe('ProfitLossModalButtonComponent', () => {
  let component: ProfitLossModalButtonComponent;
  let fixture: ComponentFixture<ProfitLossModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitLossModalButtonComponent]
    });
    fixture = TestBed.createComponent(ProfitLossModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
