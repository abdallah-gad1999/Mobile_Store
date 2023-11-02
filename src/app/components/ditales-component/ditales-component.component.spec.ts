import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitalesComponentComponent } from './ditales-component.component';

describe('DitalesComponentComponent', () => {
  let component: DitalesComponentComponent;
  let fixture: ComponentFixture<DitalesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DitalesComponentComponent]
    });
    fixture = TestBed.createComponent(DitalesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
