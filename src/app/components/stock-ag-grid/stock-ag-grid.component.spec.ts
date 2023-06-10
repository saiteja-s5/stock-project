import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAgGridComponent } from './stock-ag-grid.component';

describe('StockAgGridComponent', () => {
  let component: StockAgGridComponent;
  let fixture: ComponentFixture<StockAgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockAgGridComponent]
    });
    fixture = TestBed.createComponent(StockAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
