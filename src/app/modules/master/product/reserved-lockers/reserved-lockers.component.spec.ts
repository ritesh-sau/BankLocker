import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedLockersComponent } from './reserved-lockers.component';

describe('ReservedLockersComponent', () => {
  let component: ReservedLockersComponent;
  let fixture: ComponentFixture<ReservedLockersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedLockersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservedLockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
