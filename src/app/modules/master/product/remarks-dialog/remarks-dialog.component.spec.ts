import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksDialogComponent } from './remarks-dialog.component';

describe('RemarksDialogComponent', () => {
  let component: RemarksDialogComponent;
  let fixture: ComponentFixture<RemarksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemarksDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemarksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
