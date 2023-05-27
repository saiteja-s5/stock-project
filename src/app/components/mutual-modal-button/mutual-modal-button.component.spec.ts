import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualModalButtonComponent } from './mutual-modal-button.component';

describe('MutualModalButtonComponent', () => {
  let component: MutualModalButtonComponent;
  let fixture: ComponentFixture<MutualModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualModalButtonComponent]
    });
    fixture = TestBed.createComponent(MutualModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
