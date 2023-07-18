import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUpdateFormComponent } from './table-update-form.component';

describe('TableUpdateFormComponent', () => {
  let component: TableUpdateFormComponent;
  let fixture: ComponentFixture<TableUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableUpdateFormComponent]
    });
    fixture = TestBed.createComponent(TableUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
