import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidMinueComponent } from './said-minue.component';

describe('SaidMinueComponent', () => {
  let component: SaidMinueComponent;
  let fixture: ComponentFixture<SaidMinueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaidMinueComponent]
    });
    fixture = TestBed.createComponent(SaidMinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
