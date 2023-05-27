import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundModalButtonComponent } from './fund-modal-button.component';

describe('FundModalButtonComponent', () => {
  let component: FundModalButtonComponent;
  let fixture: ComponentFixture<FundModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundModalButtonComponent]
    });
    fixture = TestBed.createComponent(FundModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
