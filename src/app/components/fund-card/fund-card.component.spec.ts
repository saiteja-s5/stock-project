import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCardComponent } from './fund-card.component';

describe('FundCardComponent', () => {
  let component: FundCardComponent;
  let fixture: ComponentFixture<FundCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundCardComponent]
    });
    fixture = TestBed.createComponent(FundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
