import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendFormComponent } from './dividend-form.component';

describe('DividendFormComponent', () => {
  let component: DividendFormComponent;
  let fixture: ComponentFixture<DividendFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendFormComponent]
    });
    fixture = TestBed.createComponent(DividendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
