import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendCardComponent } from './dividend-card.component';

describe('DividendCardComponent', () => {
  let component: DividendCardComponent;
  let fixture: ComponentFixture<DividendCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendCardComponent]
    });
    fixture = TestBed.createComponent(DividendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
