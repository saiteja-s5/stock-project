import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundAgGridComponent } from './mutual-fund-ag-grid.component';

describe('MutualFundAgGridComponent', () => {
  let component: MutualFundAgGridComponent;
  let fixture: ComponentFixture<MutualFundAgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualFundAgGridComponent]
    });
    fixture = TestBed.createComponent(MutualFundAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
