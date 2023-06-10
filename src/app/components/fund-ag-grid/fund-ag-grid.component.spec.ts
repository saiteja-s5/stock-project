import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAgGridComponent } from './fund-ag-grid.component';

describe('FundAgGridComponent', () => {
  let component: FundAgGridComponent;
  let fixture: ComponentFixture<FundAgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundAgGridComponent]
    });
    fixture = TestBed.createComponent(FundAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
