import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossFormComponent } from './profit-loss-form.component';

describe('ProfitLossFormComponent', () => {
  let component: ProfitLossFormComponent;
  let fixture: ComponentFixture<ProfitLossFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitLossFormComponent]
    });
    fixture = TestBed.createComponent(ProfitLossFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
