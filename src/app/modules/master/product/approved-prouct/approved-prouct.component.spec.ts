import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedProuctComponent } from './approved-prouct.component';

describe('ApprovedProuctComponent', () => {
  let component: ApprovedProuctComponent;
  let fixture: ComponentFixture<ApprovedProuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedProuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
