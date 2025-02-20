import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedProductComponent } from './approved-product.component';

describe('ApprovedProductComponent', () => {
  let component: ApprovedProductComponent;
  let fixture: ComponentFixture<ApprovedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
