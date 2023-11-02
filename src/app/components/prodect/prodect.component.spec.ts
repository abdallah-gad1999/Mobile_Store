import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectComponent } from './prodect.component';

describe('ProdectComponent', () => {
  let component: ProdectComponent;
  let fixture: ComponentFixture<ProdectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdectComponent]
    });
    fixture = TestBed.createComponent(ProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
