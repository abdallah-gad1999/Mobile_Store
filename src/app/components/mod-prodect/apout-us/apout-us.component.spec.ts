import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoutUsComponent } from './apout-us.component';

describe('ApoutUsComponent', () => {
  let component: ApoutUsComponent;
  let fixture: ComponentFixture<ApoutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApoutUsComponent]
    });
    fixture = TestBed.createComponent(ApoutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
