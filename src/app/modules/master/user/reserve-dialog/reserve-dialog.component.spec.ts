import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDialogComponent } from './reserve-dialog.component';

describe('ReserveDialogComponent', () => {
  let component: ReserveDialogComponent;
  let fixture: ComponentFixture<ReserveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
