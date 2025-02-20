import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveddProuctComponent } from './approvedd-prouct.component';

describe('ApproveddProuctComponent', () => {
  let component: ApproveddProuctComponent;
  let fixture: ComponentFixture<ApproveddProuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveddProuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveddProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
