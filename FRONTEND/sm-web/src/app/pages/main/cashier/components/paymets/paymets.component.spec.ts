import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymetsComponent } from './paymets.component';

describe('PaymetsComponent', () => {
  let component: PaymetsComponent;
  let fixture: ComponentFixture<PaymetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
