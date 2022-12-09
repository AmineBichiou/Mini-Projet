import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddeComponent } from './forbidde.component';

describe('ForbiddeComponent', () => {
  let component: ForbiddeComponent;
  let fixture: ComponentFixture<ForbiddeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
