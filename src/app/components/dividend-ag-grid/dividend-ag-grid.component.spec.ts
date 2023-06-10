import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendAgGridComponent } from './dividend-ag-grid.component';

describe('DividendAgGridComponent', () => {
  let component: DividendAgGridComponent;
  let fixture: ComponentFixture<DividendAgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendAgGridComponent]
    });
    fixture = TestBed.createComponent(DividendAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
