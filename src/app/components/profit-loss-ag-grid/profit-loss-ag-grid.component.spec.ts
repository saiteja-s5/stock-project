import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossAgGridComponent } from './profit-loss-ag-grid.component';

describe('ProfitLossAgGridComponent', () => {
  let component: ProfitLossAgGridComponent;
  let fixture: ComponentFixture<ProfitLossAgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitLossAgGridComponent]
    });
    fixture = TestBed.createComponent(ProfitLossAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
