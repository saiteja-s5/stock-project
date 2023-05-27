import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendModalButtonComponent } from './dividend-modal-button.component';

describe('DividendModalButtonComponent', () => {
  let component: DividendModalButtonComponent;
  let fixture: ComponentFixture<DividendModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendModalButtonComponent]
    });
    fixture = TestBed.createComponent(DividendModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
