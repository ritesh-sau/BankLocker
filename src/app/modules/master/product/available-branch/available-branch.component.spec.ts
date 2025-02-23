import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBranchComponent } from './available-branch.component';

describe('AvailableBranchComponent', () => {
  let component: AvailableBranchComponent;
  let fixture: ComponentFixture<AvailableBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
