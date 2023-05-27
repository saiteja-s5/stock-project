import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockModalButtonComponent } from './stock-modal-button.component';

describe('StockModalButtonComponent', () => {
  let component: StockModalButtonComponent;
  let fixture: ComponentFixture<StockModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockModalButtonComponent]
    });
    fixture = TestBed.createComponent(StockModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
