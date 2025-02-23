import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchBookedComponent } from './branch-booked.component';

describe('BranchBookedComponent', () => {
  let component: BranchBookedComponent;
  let fixture: ComponentFixture<BranchBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchBookedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
